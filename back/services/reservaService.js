import ReservaRepository from "../repositories/reservaRepository.js";
import clienteRepository from "../repositories/clienteRepository.js";
import Cliente from "../models/Cliente.js";
import Reserva from "../models/Reserva.js";

class ReservaService {
  async getReservas({ pagina = 1, limite = 10 } = {}) {
    return ReservaRepository.obtenerTodos({ pagina, limite });
  }

  async getReservaById(id) {
    const reserva = await ReservaRepository.obtenerPorId(id);
    if (!reserva) {
      throw new Error(`No se encontró el Reserva con ID ${id}`);
    }
    return reserva;
  }

  async create(datos) {
    let clienteId = datos.clienteId;

    // Si viene info del cliente embebida, creamos el cliente
    if (!clienteId && datos.cliente) {
      const nuevoCliente = await Cliente.create(datos.cliente);
      clienteId = nuevoCliente.id;
    }

    return Reserva.create({
      clienteId,
      turnoId: datos.turnoId,
      estado: datos.estado || "confirmada",
    });
  }

  async update(id, datos) {
    return ReservaRepository.actualizar(id, datos);
  }

  async delete(id) {
    return ReservaRepository.eliminar(id);
  }
}

export default new ReservaService();
