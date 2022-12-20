import express from "express";

import {
    getAllClubs,
    getClubById,
    addClub,
    updateClub,
    deleteClub
} from "../controllers/club.js";

const router = express.Router();

router.get('/', getAllClubs);
router.get('/:id', getClubById);
router.post('/', addClub);
router.patch('/:id', updateClub);
router.delete('/:id', deleteClub);

export default router;