import express from "express";

import {
    getAllContacts,
    getContactsById,
    addContacts,
    updateContacts,
    deleteContacts
} from "../controllers/contacts";

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactsById);
router.post('/', addContacts);
router.patch('/:id', updateContacts);
router.delete('/:id', deleteContacts);

export default router;