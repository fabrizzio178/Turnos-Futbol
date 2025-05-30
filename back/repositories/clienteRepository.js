import RepositorioBase from "./RepositorioBase.js";
import Cliente from "../models/Cliente.js";

class ClienteRepository extends RepositorioBase {
    constructor() {
        super(Cliente);
    }

    // Aquí puedes agregar métodos específicos para el repositorio de Cliente si es necesario
}

export default new ClienteRepository();