import { useEffect, useState } from "react";
import { getCanchas, getTurnosDeCancha } from "../services/canchaService";
import CanchaCard from "../components/CanchaCard";
import ReservaForm from "../components/ReservaForm";

export default function Inicio() {
  const [canchas, setCanchas] = useState([]);
  const [turnosPorCancha, setTurnosPorCancha] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  // 🔁 Cargar canchas y turnos al inicio
  useEffect(() => {
    const cargarDatos = async () => {
      const canchasData = await getCanchas();
      setCanchas(canchasData);

      const turnos = {};
      for (let cancha of canchasData) {
        turnos[cancha.id] = await getTurnosDeCancha(cancha.id);
      }
      setTurnosPorCancha(turnos);
      setLoading(false);
    };

    cargarDatos();
  }, []);

  // 🟦 Abrir modal al hacer click en "Reservar"
  const manejarReserva = (turno) => {
    setTurnoSeleccionado(turno);
    setShowModal(true);
  };

  // 🟨 Cierre del modal
  const cerrarModal = () => {
    setShowModal(false);
    setTurnoSeleccionado(null);
  };

  // 🌀 Loader
  if (loading) return <p className="text-center mt-5">Cargando canchas...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary fw-bold">Canchas disponibles</h2>

      {canchas.map((cancha) => (
        <CanchaCard
          key={cancha.id}
          cancha={cancha}
          turnos={turnosPorCancha[cancha.id]}
          onReservar={manejarReserva}
        />
      ))}

      {/* 🧾 Modal de reserva */}
      <ReservaForm
        show={showModal}
        handleClose={cerrarModal}
        turno={turnoSeleccionado}
      />
    </div>
  );
}
