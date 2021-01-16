import { Router } from "express";

export var router = Router();


router.use('/user', require('./user'));
router.use((req, res) => res.sendStatus(404));

module.exports = router;