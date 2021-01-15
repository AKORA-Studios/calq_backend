import { Router } from "express";

export var router = Router();


router.use('/subject', require('./subject'));
router.use((req, res) => res.sendStatus(404));

module.exports = router;