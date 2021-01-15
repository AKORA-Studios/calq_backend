import { Router } from "express";
import { Subject, SubjectMod } from "../database";

export var router = Router();

router.get('/all', (req, res) => {
    SubjectMod.find().exec()
        .then(res.send);
});

router.get('/:id', async (req, res) => {
    var data = await SubjectMod.findById(req.params.id);

    if (!data) return res.sendStatus(404);
    return res.send(data);
})

router.patch('/:id', async (req, res) => {
    var patch = req.body as Subject;

    var data = await SubjectMod.findById(req.params.id);
    if (!data) return res.sendStatus(404);

    //@ts-ignore
    for (const key of Object.keys(patch)) data[key] = patch[key];

    data.save()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

router.delete('/:id', async (req, res) => {
    var data = await SubjectMod.findById(req.params.id);
    if (!data) return res.sendStatus(404);

    data.delete()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

router.post('/', async (req, res) => {
    var data = req.body as Subject;

    SubjectMod.create(data)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
});

router.use('/:id/tests', require('./test'))

module.exports = router;