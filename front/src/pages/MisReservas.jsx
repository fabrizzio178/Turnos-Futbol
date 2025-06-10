import { useState } from "react";
import axios from "axios";

export default function MisReservas() {
  const [dato, setDato] = useState("");
  const [reservas, setReservas] = useState([]);
  const [buscando, setBuscando] = useState(false);
  const [cancelar, setCancelar] = useState(false);

  const buscarReservas = async (e) => {
    e.preventDefault();
    setBuscando(true);

    try {
      const res = await axios.get("http://localhost:3000/api/reservas");
      const todas = res.data;

      const filtradas = todas.filter(
        (r) =>
          r.cliente?.mail?.toLowerCase() === dato.toLowerCase() ||
          r.cliente?.telefono === dato
      );

      setReservas(filtradas);
    } catch (error) {
      console.error("Error al buscar reservas:", error);
      alert("❌ Hubo un error al buscar las reservas.");
    } finally {
      setBuscando(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres cancelar esta reserva?")) {
      return;
    }

    try{
      const del = await axios.delete(`http://localhost:3000/api/reservas/${id}`);
      if (del.status === 200 || del.status === 204){
        setReservas(reservas.filter((reserva) => reserva.id !== id));
        alert("✅ Reserva cancelada correctamente.");
      }
    } catch (error){
      console.error("Error al cancelar la reserva:", error);
      alert("❌ Hubo un error al cancelar la reserva.");
    }

  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-primary fw-bold">Consultar mis reservas</h2>

      <form onSubmit={buscarReservas} className="mb-4">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingresá tu correo o teléfono"
          value={dato}
          onChange={(e) => setDato(e.target.value)}
          required
        />
        <button className="btn btn-primary" disabled={buscando}>
          {buscando ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {reservas.length === 0 && !buscando && <p>No hay reservas encontradas.</p>}

      {reservas.map((reserva) => (
        <div key={reserva.id} className="border rounded p-3 mb-3">
          <p><strong>Cancha:</strong> {reserva.turno?.cancha?.nombre || "N/D"}</p>
          <p><strong>Fecha:</strong> {reserva.turno?.fecha}</p>
          <p><strong>Hora:</strong> {reserva.turno?.hora}</p>
          <p><strong>Estado:</strong> {reserva.estado}</p>
          {reserva.estado === "confirmada" && (
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(reserva.id)}
            >
              Cancelar Reserva
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
