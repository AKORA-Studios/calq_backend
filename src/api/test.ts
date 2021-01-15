import { Router } from "express";
import { SubjectMod, Test } from "../database";

export var router = Router();
const { get, delete: del, put, patch, post } = router;

get('/all', async (req, res) => {
    var data = await SubjectMod.findById(req.params.id);
    if (!data) return res.sendStatus(404);

    res.send(data.tests);
});

post('/', async (req, res) => {
    var data = req.body as Test;
    var sub = await SubjectMod.findById(req.params.id);
    if (!sub) return res.sendStatus(404);

    sub.tests.push(data);
    sub.save()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
})

module.exports = router;