import CanchaRepository from "../repositories/canchaRepository.js";
import Turno from "../models/Turno.js";

class CanchaService{
    async getCanchas({ pagina = 1, limite = 10 } = {}){
        return CanchaRepository.obtenerTodos({ pagina, limite });
    }

    async getCanchaById(id){
        const cancha = await CanchaRepository.obtenerPorId(id);
        if (!cancha){
            throw new Error(`No se encontró la cancha con ID ${id}`);
        }
        return cancha;
    }

    async createCancha(datos){
        return CanchaRepository.crear(datos);
    }

    async updateCancha(id, datos){
        return CanchaRepository.actualizar(id, datos);

    }

    async deleteCancha(id){
        return CanchaRepository.eliminar(id);
    }

    async getTurnosPorCancha(canchaId){
        return Turno.findAll({
            where: { canchaId },
            order: [['fecha', 'ASC'], ['hora', 'ASC']]
        })
    }
}

export default new CanchaService();