import { Router } from "express";

export var router = Router();
const { get, delete: del, put, patch, post } = router;

get('/', (req, res) => {
    res.send('Default')
});

module.exports = router;