import Clubs from "../models/clubsModel.js";

export const getAllClubs = async (req, res) => {
    try {
        const clts = await Clubs.findAll();
        res.json(clts);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getClubById = async (req, res) => {
    try {
        const clt = await Clubs.findAll({
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

export const addClub = async (req, res) => {
/*
    res.json({
        "message": "To be implement [addClubs], " + req.body
    });
*/

    try {
        await Clubs.create(req.body);
        res.json({
            "message": "Clubs added"
        });   
    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

export async function updateClub(req, res) {
    /*
        console.log(req.params);
        res.json({
            "message": "To be implement [updateClient]"
        });
    */
    try {
        await Clubs.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Clubs updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }

}

export const deleteClub = async (req, res) => {
/*
    res.json({
        "message": "To be implement [deleteClubs]"
    });
*/

    try {
        await Clubs.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Clubs deleted"
        });
    } catch (error) {
        res.json({ message });
    }

}

