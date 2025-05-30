export default class RepositorioBase {
    constructor(modelo){
        this.modelo = modelo;
    }


    async obtenerTodos({ pagina = 1, limite = 10 } = {}){
        const offset = (pagina - 1) * limite;
        return this.modelo.findAll({ limit: limite, offset: offset });
    }

    async obtenerPorId(id){
        return this.modelo.findByPk(id);
    }

    async crear(datos){
        return this.modelo.create(datos);
    }

    async actualizar(id, datos){
        const instancia = await this.obtenerPorId(id);
        if (!instancia) {
            throw new Error(`No se encontró el registro con ID ${id}`);
        }
        return instancia.update(datos);
    }

    async eliminar(id){
        const instancia = await this.obtenerPorId(id);
        if (!instancia) {
            throw new Error(`No se encontró el registro con ID ${id}`);
        }
        return instancia.destroy();
    }

    async contar(){
        return this.modelo.count();
    }
}


