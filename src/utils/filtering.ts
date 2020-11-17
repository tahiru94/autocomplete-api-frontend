import Person from '../models/person';

export const filterSearchByName = (searchTerm: string, apiResults: Person[]): Person[] => {
    const result: Person[] = apiResults.filter((person: Person) => {
        return person.name.indexOf(searchTerm) >= 0;
    });

    return result;
}

export const filterSearchByEmail = (searchTerm: string, apiResults: Person[]): Person[] => {
    const result: Person[] = apiResults.filter((person: Person) => {
        return person.email.indexOf(searchTerm) >= 0;
    });

    return result;
}