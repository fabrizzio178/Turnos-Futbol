import TurnoRepository from "../repositories/turnoRepository.js";

class TurnoService{
    async getTurnos({ pagina = 1, limite = 10 } = {}){
        return TurnoRepository.obtenerTodos({ pagina, limite });
    }

    async getTurnoById(id){
        const turno = await TurnoRepository.obtenerPorId(id);
        if (!turno){
            throw new Error(`No se encontró el Turno con ID ${id}`);
        }
        return turno;
    }

    async create(datos){
        return TurnoRepository.crear(datos);
    }

    async update(id, datos){
        return TurnoRepository.actualizar(id, datos);

    }

    async delete(id){
        return TurnoRepository.eliminar(id);
    }
}

export default new TurnoService();