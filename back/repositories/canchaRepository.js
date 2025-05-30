import RepositorioBase from "./RepositorioBase.js";
import Cancha from "../models/Cancha.js";

class CanchaRepository extends RepositorioBase {
    constructor(){
        super(Cancha);
    }

    // Métodos específicos de la cancha pueden ir acá 

}

export default new CanchaRepository();