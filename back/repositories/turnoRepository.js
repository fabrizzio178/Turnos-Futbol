import RepositorioBase from "./RepositorioBase.js";
import Turno from "../models/Turno.js";

class TurnoRepository extends RepositorioBase {
    constructor() {
        super(Turno);
    }

    // Aquí puedes agregar métodos específicos para el repositorio de Turno si es necesario
}

export default new TurnoRepository();
