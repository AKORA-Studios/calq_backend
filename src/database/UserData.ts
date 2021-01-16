import { Document, Schema, model } from "mongoose";

export interface Test {
    /** The name of the Test */
    name: string;
    /** Tegs like `trigonometry, geometry, probability, orally`. */
    tags: string[];
    /** The date the Test was written at. */
    date: Date;
    /** Shows how much this test effects your grade. 
     * Klassenarbeit = BIG BOIIIIIII
    */
    type: 'Big' | 'Smal';
    /** A number ranging from `0` to `15` that stands for the number of points you got in the Test. */
    points: number;
}


export interface Subject {
    /** Name of the Subject */
    name: string;
    /** A List of all tests written in this Subject */
    tests: Test[];
}


export interface UserData {
    id?: any;
    userID: string;
    data: Subject[]
}
export interface UserDataDoc extends UserData, Document { }




const TestSchema = new Schema({
    name: String,
    /** Tegs like `trigonometry, geometry, probability, orally`. */
    tags: [String],
    /** The date the Test was written at. */
    date: Date,
    /** Shows how much this test effects your grade. 
     * Klassenarbeit = BIG BOIIIIIII
    */
    type: String,
    /** A number ranging from `0` to `15` that stands for the number of points you got in the Test. */
    points: Number
});


const SubjectSchema = new Schema({
    /** Name of the Subject */
    name: String,
    /** A List of all tests written in this Subject */
    tests: [TestSchema]
});


export const UserDataScheme = new Schema({
    userID: String,
    data: [SubjectSchema]
})

export const UserDataMod = model<UserDataDoc>('userdata', UserDataScheme);