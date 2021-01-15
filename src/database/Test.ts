import { Document, model, Model, Schema } from "mongoose";

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
export interface TestDoc extends Test, Document { }

export const TestSchema = new Schema({
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

//export const TestMod = model<TestDoc>('tests', TestSchema);