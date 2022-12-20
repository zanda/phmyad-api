import Competition from "../models/competitionsModel.js";

export const getAllCompetitions = async (req, res) => {
    try {
        const clts = await Competition.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getCompetitionById = async (req, res) => {
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

export const addCompetition = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addClient], " + req.body xxx
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

export const deleteCompetition = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteCompetition]"
    });
*/

    try {
        await Competition.destroy({
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

