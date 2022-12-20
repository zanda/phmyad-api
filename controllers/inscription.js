// inscription.js [controller]
import inscription from "../models/inscriptionModel.js";

export const getAllClients = async (req, res) => {
    try {
        const clts = await inscription.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getInscriptionById = async (req, res) => {
    try {
        const clt = await inscription.findAll({
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

export const addInscription = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addInscription], " + req.body
    });
*/

    try {
        await inscription.create(req.body);
        res.json({
            "message": "Inscription added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateInscription(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateInscription]"
        });
    */
    try {
        await inscription.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "inscription updated"
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
        "message": "To be implement [deleteinscription]"
    });
*/

    try {
        await Clients.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "inscription deleted"
        });
    } catch (error) {
        res.json({ message });
    }

}

