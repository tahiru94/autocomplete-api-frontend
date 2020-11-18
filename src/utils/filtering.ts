import { Person } from '../models';

export const filterSearchByStringFields = (searchTerm: string, apiResults: Person[]): Person[] => {
    const result: Person[] = apiResults.filter((person: Person) => {
        return person.name.indexOf(searchTerm) >= 0 || person.email.indexOf(searchTerm) >= 0;
    });

    return result;
}