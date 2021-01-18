import { Request, Router } from "express";
import { Subject, UserDataDoc, UserDataMod, UserDoc, UserMod } from "../database";

export var router = Router();

function user(req: Request): Promise<UserDoc | null> {
    return UserMod.findById(req.params.userID).exec()
}

function getData(id: string): Promise<UserDataDoc | null> {
    return UserDataMod.findOne({ userID: id }).exec()
}

router.get('/', async (req, res, next) => {
    try {
        var data = await getData(req.session.userID + "");

        if (!data) return res.sendStatus(404);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;