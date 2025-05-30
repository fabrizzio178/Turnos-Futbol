import express from "express";
import reservaService from "../services/reservaService.js";

const router = express.Router();

// GET /api/reservas
router.get("/", async (req, res) => {
  try {
    const { pagina = 1, limite = 10 } = req.query;
    const reservas = await reservaService.getReservas({ pagina, limite });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/reservas/:id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const reserva = await reservaService.getReservaById(id);
    res.json(reserva);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// POST /api/reservas
router.post("/", async (req, res) => {
  try {
    const nueva = await reservaService.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH /api/reservas/:id
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const actualizado = await reservaService.update(id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/reservas/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await reservaService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
// This code defines the routes for managing reservations in an Express application.