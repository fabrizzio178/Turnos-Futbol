import axios from "axios";

const API_RESERVAS = "http://localhost:3000/api/reservas";

export const crearReserva = async(datos) => {
    try {
        const response = await axios.post(API_RESERVAS, datos);
        return response.data;
    } catch (error) {
        console.error("Error al crear la reserva:", error);
        throw error;
    }
}

export const verificarTurnoOcupado = async(turnoId) => {
    const res = await axios.get(`${API_RESERVAS}`);
    const reservas = res.data;
    return reservas.some(reserva => reserva.turnoId === turnoId && reserva.estado === "confirmada");
};