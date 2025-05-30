import React from "react";

export default function CanchaCard({ cancha, turnos, onReservar }) {
  return (
    <div className="card shadow-sm mb-4 border-primary">
      <div className="card-body">
        <h5 className="card-title text-primary">
          {cancha.nombre} <span className="text-dark">({cancha.tipo} jugadores)</span>
        </h5>
        <p className="card-text mb-2">
          <strong>📍 Ubicación:</strong> {cancha.ubicacion}
        </p>
        <h6 className="mb-2">⏰ Turnos disponibles:</h6>
        {turnos?.length > 0 ? (
          <ul className="list-group list-group-flush">
            {turnos.map((turno) => (
              <li key={turno.id} className="list-group-item d-flex justify-content-between align-items-center">
                Fecha: {turno.fecha} - Horario: {turno.hora}
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => onReservar(turno)}
                >
                  Reservar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No hay turnos disponibles para esta cancha.</p>
        )}
      </div>
    </div>
  );
}
