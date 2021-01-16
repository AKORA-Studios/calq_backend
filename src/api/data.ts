import { Request, Router } from "express";
import { Subject, UserDataDoc, UserDataMod, UserDoc, UserMod } from "../database";

export var router = Router();

function user(req: Request): Promise<UserDoc | null> {
    return UserMod.findById(req.params.userID).exec()
}

function getData(req: Request): Promise<UserDataDoc[] | null> {
    return UserDataMod.find({ userID: req.params.userID }).exec()
}

router.get('/', async (req, res) => {
    try {
        var data = await getData(req);
        if (!data) return res.sendStatus(404);
        res.send(data);
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;