import express from "express";

import {
    getAllContacts,
    getContactById,
    addContact,
    updateContact,
    deleteContact
} from "../controllers/contact.js";

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', addContact);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;