import ClienteRepository from "../repositories/clienteRepository.js";

class ClienteService{
    async getClientes({ pagina = 1, limite = 10 } = {}){
        return ClienteRepository.obtenerTodos({ pagina, limite });
    }

    async getClienteById(id){
        const cliente = await ClienteRepository.obtenerPorId(id);
        if (!cliente){
            throw new Error(`No se encontró el cliente con ID ${id}`);
        }
        return cliente;
    }

    async create(datos){
        return ClienteRepository.crear(datos);
    }

    async update(id, datos){
        return ClienteRepository.actualizar(id, datos);

    }

    async delete(id){
        return ClienteRepository.eliminar(id);
    }
}

export default new ClienteService();