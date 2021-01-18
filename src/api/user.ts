import { Router } from "express";
import { User, UserMod } from "../database";

export var router = Router();

router.get('/', async (req, res) => {
    var data = await UserMod.findById(req.session.userID);

    if (!data) return res.sendStatus(404);
    return res.send(data);
})


router.get('/:userID', async (req, res) => {
    var data = await UserMod.findById(req.params.userID);

    if (!data) data = await UserMod.findOne({ username: req.params.userID });
    if (!data) return res.sendStatus(404);
    return res.send(data);
})

router.patch('/:userID', async (req, res) => {
    var patch = req.body as User;

    var data = await UserMod.findById(req.params.userID);
    if (!data) return res.sendStatus(404);

    //@ts-ignore
    for (const key of Object.keys(patch)) data[key] = patch[key];

    data.save()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

router.delete('/:userID', async (req, res) => {
    var data = await UserMod.findById(req.params.userID);
    if (!data) return res.sendStatus(404);

    data.delete()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

router.post('/', async (req, res) => {
    var data = req.body as User;

    UserMod.create(data)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

module.exports = router;