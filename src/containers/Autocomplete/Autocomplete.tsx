import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Search, DetailView, Results } from '../../components';

import { Person } from '../../models';
import {
    filterSearchByStringFields,
    sortByEmail,
    sortByName
} from '../../utils';

interface State {
    searchTerm: string;
    people: Person[];
    selectedIndex: number;
}

class Autocomplete extends Component<{}, State> {
    state: State = {
        searchTerm: '',
        people: [],
        selectedIndex: -1
    }

    onSearchTermUpdate = (searchTerm: string) => {
        let apiResult: Person[] = [];

        axios.get(`http://127.0.0.1:8080/?search=${searchTerm}`).then((result) => {
            apiResult = result.data;

            const populatedResults: boolean = (searchTerm.length > 0 && apiResult.length > 0);
            const filteredResults: Person[] = filterSearchByStringFields(searchTerm, apiResult);
            const sortedResults: Person[] = sortByName(searchTerm, sortByEmail(searchTerm, filteredResults));

            this.setState({
                searchTerm,
                people: populatedResults ?
                    sortedResults :
                    []
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    onItemClick = (id: number) => {
        this.setState({ selectedIndex: id });
    }

    getDetailViewContext = () => {
        if (this.state.selectedIndex !== -1) {
            return this.state.people.filter((person: Person) => person.id === this.state.selectedIndex)[0];
        }
    }

    render() {
        return (
            <Wrapper>
                <Inputs>
                    <Search onSearchTermUpdate={this.onSearchTermUpdate} />
                    <Results people={this.state.people} onItemClick={this.onItemClick.bind(this)} />
                </Inputs>
                <SelectedInput>
                    <DetailView person={this.getDetailViewContext()} />
                </SelectedInput>
            </Wrapper>
        );
    }
}

const Wrapper = styled(`div`)`
    width: 100vw;
    display: flex;
    flex-direction: row;
    margin-top: 12px;
`;

const Inputs = styled(`div`)`
    width: 50vw;
`;

const SelectedInput = styled(`div`)`
    width: 50vw;
    justify-content: center;
    align-items: center;
`;

export default Autocomplete;