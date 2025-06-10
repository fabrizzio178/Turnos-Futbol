import express from "express";
import cors from "cors";
import sequelize from "./db.js";

// Modelos
import Cancha from "./models/Cancha.js";
import Turno from "./models/Turno.js";
import Cliente from "./models/Cliente.js";
import Reserva from "./models/Reserva.js";

// Routers
import canchaRouter from "./routes/cancha.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import turnoRouter from "./routes/turno.routes.js";
import reservaRouter from "./routes/reserva.routes.js";

// Middlewares
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas principales
app.use("/api/canchas", canchaRouter);
app.use("/api/clientes", clienteRouter);
app.use("/api/turnos", turnoRouter);
app.use("/api/reservas", reservaRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor activo 🚀");
});

// 👉 Manejo de errores global (SIEMPRE AL FINAL)
app.use(errorHandler);

// Inicialización de BD y servidor
(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos sincronizada");

    // Datos precargados
    const canchas = await Cancha.bulkCreate([
      { nombre: "Cancha Valpa", tipo: 7, ubicacion: "Barrio Centro" },
      { nombre: "Cancha Pilka", tipo: 9, ubicacion: "Barrio Sur" },
      { nombre: "Cancha GRAN 7", tipo: 7, ubicacion: "Ciudad Universitaria" },
      { nombre: "Cancha Pilka", tipo: 9, ubicacion: "Zona Sur" },
    ]);

    const turnos = await Turno.bulkCreate([
      { fecha: "2025-06-01", hora: "18:00", canchaId: canchas[0].id },
      { fecha: "2025-06-01", hora: "20:00", canchaId: canchas[1].id },
      { fecha: "2025-05-30", hora: "22:00", canchaId: canchas[3].id },
    ]);

    const clientes = await Cliente.bulkCreate([
      { nombre: "Juan Pérez", mail: "juan@futbol.com", telefono: "123456789" },
      { nombre: "Leo Messi", mail: "messi@goat.com", telefono: "987654321" },
    ]);

    await Reserva.bulkCreate([
      { clienteId: clientes[0].id, turnoId: turnos[0].id, estado: "confirmada" },
      { clienteId: clientes[1].id, turnoId: turnos[1].id, estado: "pendiente" },

    ]);

    console.log("Datos hardcodeados precargados");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
  }
})();
