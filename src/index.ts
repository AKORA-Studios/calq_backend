import express from 'express';

var app = express();


app.use((req, res) => {
    res.send({ name: "QwQ" })
})