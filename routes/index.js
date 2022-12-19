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
router.post('/', addClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;