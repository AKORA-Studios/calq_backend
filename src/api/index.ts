import { Router } from "express";
import { User, UserData, UserDataMod, UserMod } from "../database";

export var router = Router();

router.get('/', async function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        if (req.session.views > 5) {
            res.sendStatus(200);
            console.log(req.session.views)
        } else {
            res.send(req.session)
        }
    } else {
        req.session.views = 1
        return res.sendStatus(200)
    }
})


router.post('/login', async (req, res) => {
    const data = req.body as User;
    const user = await UserMod.findOne(data);
    if (!user) return res.sendStatus(403);

    req.session.userID = user.id;
    req.session.save();

    res.sendStatus(200);
});

router.use((req, res, next) => {
    if (!req.session.userID) return res.sendStatus(403);

    next();
})

router.use('/user', require('./user'));
router.use('/data', require('./data'))
router.get('/initial', (req, res) => {
    UserMod.create({
        username: "Test",
        password: "QwQ"
    }).then(u => {
        UserDataMod.create({
            userID: u.id,
            data: [{
                name: "ENG",
                color: "#ffffff",
                tests: [{
                    name: "Future I",
                    tags: [],
                    date: new Date("2020/02/05"),
                    type: "Big",
                    points: 10
                }, {
                    name: "Future II",
                    tags: [],
                    date: new Date("2020/03/05"),
                    type: "Big",
                    points: 10
                }, {
                    name: "Future III",
                    tags: [],
                    date: new Date("2020/04/05"),
                    type: "Smal",
                    points: 5
                }]
            }]
        } as UserData)
    }).then(() => res.sendStatus(200));
})
router.use((req, res) => res.sendStatus(404));

module.exports = router;