import { Request, Router } from "express";
import { Subject, UserDataDoc, UserDataMod, UserDoc, UserMod } from "../database";

export var router = Router();

function user(req: Request): Promise<UserDoc | null> {
    return UserMod.findById(req.params.userID).exec()
}

function getData(id: string): Promise<UserDataDoc | null> {
    return UserDataMod.findOne({ userID: id }).exec()
}

router.get('/:userID/data/', async (req, res) => {
    try {
        var data = await getData(req.params.userID);
        console.log(req.params);
        console.log(data);

        //UserDataMod.create({ "userID": "600359c10d42124580e6e6fc", "data": [{ "name": "EN", "color": "#ffffff", "tests": [] }] })
        if (!data) return res.sendStatus(404);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;