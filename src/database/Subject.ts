import { Document, Schema, model } from "mongoose";
import { Test, TestSchema } from "./Test";

export interface Subject {
    /** Name of the Subject */
    name: string;
    /** The color the Subject is marked as in **HEX** format, this value affects the graph and visual appearance. */
    color: string;
    /** This value is internally set and doesnt affect anything except internal functionallity.*/
    id?: any;
    /** A List of all tests written in this Subject */
    tests: Test[];
}

export interface SubjectDoc extends Subject, Document { }

export const SubjectSchema = new Schema({
    /** Name of the Subject */
    name: String,
    /** The color the Subject is marked as in **HEX** format, this value affects the graph and visual appearance. */
    color: String,
    /** A List of all tests written in this Subject */
    tests: [TestSchema]
});

export const SubjectMod = model<SubjectDoc>('subjects', SubjectSchema);