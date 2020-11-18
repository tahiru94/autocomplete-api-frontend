import * as StringSimilarity from 'string-similarity';
import { Person, PersonMatch } from '../models';

const mapResults = (personMatch: PersonMatch[]): Person[] => {
    const results: Person[] = personMatch.map((result: PersonMatch): Person => {
        return {
            id: result.id,
            name: result.name,
            email: result.email
        }
    });

    return results;
}

export const sortByName = (searchTerm: string, apiResults: Person[]): Person[] => {
    const matchResults: PersonMatch[] = apiResults.map((result: Person) => {
        return {
            ...result,
            similarityMatch: StringSimilarity.compareTwoStrings(searchTerm, result.name)
        }
    }).sort((personA: PersonMatch, personB: PersonMatch) => {
        return personB.similarityMatch - personA.similarityMatch;
    });

    return mapResults(matchResults);
}

export const sortByEmail = (searchTerm: string, apiResults: Person[]): Person[] => {
    const matchResults: PersonMatch[] = apiResults.map((result: Person) => {
        return {
            ...result,
            similarityMatch: StringSimilarity.compareTwoStrings(searchTerm, result.email)
        }
    }).sort((personA: PersonMatch, personB: PersonMatch) => {
        return personB.similarityMatch - personA.similarityMatch;
    });

    return mapResults(matchResults);
}