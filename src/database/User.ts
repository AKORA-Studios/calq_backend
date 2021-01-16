import { Document, model, Schema } from "mongoose";



export interface User {
    username: string;
    password: string;
    id?: any;
    settings: SubjectSetting[];
}
export interface UserDoc extends User, Document { }

export type SubjectType = 'MA' | 'ENG' | 'DE' | 'CHE' | 'FRZ' | 'BIO' | 'SPA' | 'GEO' | 'INF' | 'ETH' | 'KU' | 'MU';
export interface SubjectSetting {
    name: SubjectType;
    color: string;
    active: boolean;
}
const SubjectSettingSchema = new Schema({
    name: String,
    color: String,
    active: Boolean
});

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        type: [SubjectSettingSchema],
        required: true
    }
});

export const UserMod = model<UserDoc>('users', UserSchema);