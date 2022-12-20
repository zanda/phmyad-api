// contacts.js [controller]
import contacts from "../models/contactsModel.js";
import Clubs from "../models/contactsModel.js";

export const getAllContacts = async (req, res) => {
    try {
        const clts = await contacts.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getContactsById = async (req, res) => {
    try {
        const clt = await contacts.findAll({
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

export const addContacts = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addClient], " + req.body
    });
*/

    try {
        await Clubs.create(req.body);
        res.json({
            "message": "Contacts added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateContacts(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateContacts]"
        });
    */
    try {
        await contacts.update(req.body, {
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

export const deleteContacts = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteContacts]"
    });
*/

    try {
        await contacts.destroy({
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

