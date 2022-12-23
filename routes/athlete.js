import express from "express";

import {
    getAllAthletes,
    getAthleteById,
    addAthlete,
    updateAthlete,
    deleteAthlete
} from "../controllers/athlete.js";

const router = express.Router();

router.get('/', getAllAthletes);
router.get('/:id', getAthleteById);
router.post('/', addAthlete);
router.patch('/:id', updateAthlete);
router.delete('/:id', deleteAthlete);

export default router;