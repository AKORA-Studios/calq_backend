import mongoose from 'mongoose';

export * from './UserData';
export * from './User';

mongoose.connect('mongodb://uwu.org:27017/calq', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(' > Connected to DB'))