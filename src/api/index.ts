import { Router } from "express";
import { UserData, UserDataMod, UserMod } from "../database";

export var router = Router();


router.use('/user', require('./user'));
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