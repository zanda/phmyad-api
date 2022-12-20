import express from "express";

import {
    getAllClubs,
    getClubsById,
    addClubs,
    updateClubs,
    deleteClubs
} from "../controllers/clubs.js";

const router = express.Router();

router.get('/', getAllClubs);
router.get('/:id', getClubsById);
router.post('/', addClubs);
router.patch('/:id', updateClubs);
router.delete('/:id', deleteClubs);

export default router;