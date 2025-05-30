import RepositorioBase from "./RepositorioBase.js";
import Reserva from "../models/Reserva.js";
import Cliente from "../models/Cliente.js";
import Turno from "../models/Turno.js";
import Cancha from "../models/Cancha.js";

class ReservaRepository extends RepositorioBase {
  constructor() {
    super(Reserva);
  }

  // Override del método obtenerTodos para incluir relaciones
  async obtenerTodos({ pagina = 1, limite = 10 } = {}) {
    const offset = (pagina - 1) * limite;
    return Reserva.findAll({
      limit: limite,
      offset,
      include: [
        { model: Cliente, as: "cliente" },
        {
          model: Turno,
          as: "turno",
          include: [{ model: Cancha, as: "cancha" }],
        },
      ],
    });
  }
}

export default new ReservaRepository();
