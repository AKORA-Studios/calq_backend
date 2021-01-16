import { Document, model, Schema } from "mongoose";



export interface User {
    username: string;
    password: string;
    id?: any;
}
export interface UserDoc extends User, Document { }

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserMod = model<UserDoc>('users', UserSchema);