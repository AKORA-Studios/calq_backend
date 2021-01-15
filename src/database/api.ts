import { Subject } from "./util";

const url = "http://localhost:3001/api/";

export function getSubjects(): Promise<Subject[]> {
    return fetch(url + "subjects").then(r => r.json())
}