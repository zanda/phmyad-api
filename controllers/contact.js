// contacts.js [controller]
import Contacts from "../models/contactsModel.js";
//import Clubs from "../models/contactsModel.js";

export const getAllContacts = async (req, res) => {
    try {
        const clts = await Contacts.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getContactById = async (req, res) => {
    try {
        const clt = await Contacts.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(clt[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const addContact = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addClient], " + req.body
    });
*/

    try {
        await Contacts.create(req.body);
        res.json({
            "message": "Contacts added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateContact(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateContacts]"
        });
    */
    try {
        await Contacts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contacts updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }

}

export const deleteContact = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteContacts]"
    });
*/

    try {
        await Contacts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contacts deleted"
        });
    } catch (error) {
        res.json({ message });
    }

}

