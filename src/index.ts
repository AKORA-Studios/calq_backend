import express from 'express';
import session from 'express-session';
import cors from 'cors';
import './database';

export var app = express();

declare module 'express-session' {
    interface SessionData {
        userID: string;
        views: number;
    }
}



app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        callback(null, true)
    }
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(session({
    secret: 'LAMO',
    saveUninitialized: true,
    resave: true
}));

app.use('/api', require('./api'))

app.listen(3001);
console.log(' > Listening on Port 3001');