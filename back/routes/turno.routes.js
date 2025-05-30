import express from "express";
import turnoService from "../services/turnoService.js";

const router = express.Router();

// GET /api/turnos
router.get("/", async (req, res) => {
  try {
    const { pagina = 1, limite = 10 } = req.query;
    const turnos = await turnoService.getTurnos({ pagina, limite });
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/turnos/:id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const turno = await turnoService.getTurnoById(id);
    res.json(turno);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// POST /api/turnos
router.post("/", async (req, res) => {
  try {
    const nuevo = await turnoService.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH /api/turnos/:id
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const actualizado = await turnoService.update(id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/turnos/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await turnoService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
