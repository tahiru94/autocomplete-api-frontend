export interface Person {
    id: number;
    name: string;
    email: string;
}

export interface PersonMatch extends Person {
    similarityMatch: number;
}