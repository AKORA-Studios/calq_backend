import { Router } from "express";

export var router = Router();

router.use('/', (req, res) => {
    res.send("QwQ");
})

module.exports = router;