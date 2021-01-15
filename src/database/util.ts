export interface RawTest {
    name: string;
    topic: string;
    date: string;
    type: 'Big' | 'Smal';
    points: number;
}
export interface Test {
    name: string;
    topic: string;
    date: Date;
    /** Shows how much this test effects your grade 
     * @example Doubled rating
     * test.rating = 2
    */
    type: 'Big' | 'Smal';
    /** A number ranging from `0` to `15` that stands for the number of points you got in the Test*/
    points: number;
    /**
     */
}

export interface RawSubject {
    name: string;
    color: string;
    id: string;
    entr: RawTest[];
}
export interface Subject {
    name: string;
    color: string;
    id: string;
    /**
     * A List of all tests written in this Subject
     */
    entr: Test[];
}

export function parse(data: RawSubject[]) {
    for (const sub of data) {
        for (const entr of sub.entr) {
            console.log(entr.date);
            //@ts-ignore
            entr.date = new Date(entr.date);
        }

        //@ts-ignore
        sub.entr = (sub.entr as unknown as Test[]).sort((a, b) => a.date.getTime() - b.date.getTime())
    }

    console.log(JSON.stringify(data));

    return data as unknown as Subject[];
}




export function range(start: number, end?: number): number[] {
    if (!end) { end = start; start = 0 }
    const arr = [];
    for (var i = start; i < end + 1; i++) arr.push(i);
    return arr;
}

export function avarage(arr: number[]) {
    return (arr.reduce((a, b) => a + b) / arr.length)
}