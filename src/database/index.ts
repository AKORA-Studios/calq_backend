import mongoose from 'mongoose';

export * from './Subject';
export * from './Test';

mongoose.connect('mongodb://192.168.1.24:27017/calq', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(' > Connected to DB'))