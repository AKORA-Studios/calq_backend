import { Router } from "express";

export var router = Router();


router.use('/subject', require('./subject'));

module.exports = router;