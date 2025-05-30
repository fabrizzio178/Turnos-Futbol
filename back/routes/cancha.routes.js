import express from 'express';
import canchaService from '../services/canchaService.js';

const router = express.Router();


// GET de todas las canchas
router.get("/", async (req, res) => {
    try {
        const { pagina, limite } = req.query;
        const canchas = await canchaService.getCanchas({ pagina, limite });
        res.json(canchas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// GET por id
router.get("/:id", async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const cancha = await canchaService.getCanchaById(id);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/canchas/:id/turnos
router.get("/:id/turnos", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const turnos = await canchaService.getTurnosPorCancha(id);
        res.json(turnos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST crear cancha
router.post("/", async (req, res) => {
    try {
        const nuevaCancha = await canchaService.createCancha(req.body);
        res.status(201).json(nuevaCancha);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PATCH /api/canchas/:id
router.patch("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const canchaActualizada = await canchaService.updateCancha(id, req.body);
        res.json(canchaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/canchas/:id
router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await canchaService.deleteCancha(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;