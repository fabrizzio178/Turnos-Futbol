import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { crearReserva, verificarTurnoOcupado } from "../services/reservaService";

export default function ReservaForm({ show, handleClose, turno }) {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si ya está reservado
    const ocupado = await verificarTurnoOcupado(turno.id);
    if (ocupado) {
      alert("⚠️ Este turno ya fue reservado.");
      handleClose();
      return;
    }

    try {
      const reserva = {
        cliente: { nombre, mail, telefono },
        turnoId: turno.id,
        estado: "confirmada",
      };

      await crearReserva(reserva);
      alert("✅ Reserva registrada correctamente.");
      handleClose();
    } catch (error) {
      console.error("Error al crear reserva:", error);
      alert("❌ Error al crear la reserva.");
    }
  };

  if (!turno) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Turno:</strong> {turno.fecha} - {turno.hora}
          </p>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              required
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              value={mail}
              required
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={telefono}
              required
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Confirmar reserva
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
