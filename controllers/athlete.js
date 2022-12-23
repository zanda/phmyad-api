// inscription.js [controller]
import Athlete from "../models/athletesModel.js";

export const getAllAthletes = async (req, res) => {
    try {
        const clts = await Athlete.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getAthleteById = async (req, res) => {
    try {
        const clt = await Athlete.findAll({
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

export const addAthlete = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addAthlete], " + req.body
    });
*/

    try {
        await Athlete.create(req.body);
        res.json({
            "message": "Athlete added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateAthlete(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateAthlete]"
        });
    */
    try {
        await Athlete.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Athlete updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }

}

export const deleteAthlete = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteAthlete]"
    });
*/

    try {
        await Athlete.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Athlete deleted"
        });
    } catch (error) {
        res.json({ message });
    }

}

