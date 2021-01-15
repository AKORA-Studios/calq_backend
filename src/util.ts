import { Subject } from "./database";

export function parse(data: any[]) {
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