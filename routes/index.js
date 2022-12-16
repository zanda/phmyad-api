import express from "express";

import {
    getAllClients,
    getClientById,
    addClient,
    updateClient,
    deleteClient
} from "../controllers/clients.js";

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/a/:id', addClient);
router.patch('/u/:id', updateClient);
router.delete('/d/:id', deleteClient);

export default router;