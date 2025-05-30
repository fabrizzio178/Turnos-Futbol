import axios from "axios";

const API_URL = "http://localhost:3000/api/canchas";

export const getCanchas = async() => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching canchas:", error);
        throw error;
    }
}

export const getTurnosDeCancha = async(id) => {
    const res = await axios.get(`${API_URL}/${id}/turnos`);
    if (res.status !== 200) {
        throw new Error("Error fetching turnos for cancha");
    }
    return res.data;

}