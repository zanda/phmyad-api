import express from "express";

import {
    getAllCompetition,
    getCompetitionById,
    addCompetition,
    updateCompetition,
    deleteCompetition
} from "../controllers/competition.js";

const router = express.Router();

router.get('/', getAllCompetition);
router.get('/:id', getCompetitionById);
router.post('/', addCompetition);
router.patch('/:id', updateCompetition);
router.delete('/:id', deleteCompetition);

export default router;