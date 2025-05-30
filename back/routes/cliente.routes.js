import express from 'express';
import clienteService from '../services/clienteService.js';

const router = express.Router();

// GET /api/clientes
router.get("/", async (req, res) => {
  try {
    const { pagina = 1, limite = 10 } = req.query;
    const clientes = await clienteService.getClientes({ pagina, limite });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/clientes/:id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cliente = await clienteService.getClienteById(id);
    res.json(cliente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// POST /api/clientes
router.post("/", async (req, res) => {
  try {
    const nuevo = await clienteService.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH /api/clientes/:id
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const actualizado = await clienteService.update(id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/clientes/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await clienteService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
