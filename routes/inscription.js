import express from "express";

import {
    getAllInscription,
    getInscriptionById,
    addInscription,
    updateInscription,
    deleteInscription
} from "../controllers/inscription.js";

const router = express.Router();

router.get('/', getAllInscription);
router.get('/:id', getInscriptionById);
router.post('/', addInscription);
router.patch('/:id', updateInscription);
router.delete('/:id', deleteInscription);

export default router;