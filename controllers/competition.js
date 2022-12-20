// client.js [controller]
import Competition from "../models/competitionModel.js";

export const getAllClients = async (req, res) => {
    try {
        const clts = await Competition.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getClientById = async (req, res) => {
    try {
        const clt = await Competition.findAll({
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
    res.json({
        "message": "To be implement [addClient], " + req.body
    });
*/

    try {
        await Competition.create(req.body);
        res.json({
            "message": "Competition added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateCompetition(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateClient]"
        });
    */
    try {
        await Competition.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Competition updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }

}

export const deleteClient = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteCompetition]"
    });
*/

    try {
        await Clients.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Competition deleted"
        });
    } catch (error) {
        res.json({ message });
    }

}

