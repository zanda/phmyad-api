// client.js [controller]
import Clients from "../models/clientsModel.js";

export const getAllClients = async (req, res) => {
    try {
        const clts = await Clients.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getClientById = async (req, res) => {
    try {
        const clt = await Clients.findAll({
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

export const addClient = async (req, res) => {
/*
    try {
        await Clients.create(req.body);
        res.json({
            "message": "Client added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }
*/
    res.json({
        "message": "To be implement [addClient], " + req.body
    });
}

export const updateClient = async (req, res) => {
/*
    try {
        await Clients.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Client updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }

*/
    res.json({
        "message": "To be implement [updateClient]"
    });
}

export const deleteClient = async (req, res) => {

    try {
        await Clients.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Client deleted"
        });
    } catch (error) {
        res.json({ message });
    }

    res.json({
        "message": "To be implement [deleteClient]"
    });
}

