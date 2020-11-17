import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Search } from '../../components';
import Results from '../../components/List/Results';
import Person from '../../models/person';

interface State {
    searchTerm: string;
    people: Person[];
}

class Autocomplete extends Component<{}, State> {
    state: State = {
        searchTerm: '',
        people: []
    }

    onSearchTermUpdate = (searchTerm: string) => {
        let apiResult: Person[] = [];

        axios.get(`http://127.0.0.1:8080/?search=${searchTerm}`).then((result) => {
            // console.log(result);
            apiResult = result.data;
            console.log('apiResult', apiResult);

            this.setState({
                searchTerm,
                people: apiResult.length ? apiResult : []
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Wrapper>
                <Search onSearchTermUpdate={this.onSearchTermUpdate} />
                <Results people={this.state.people} />
            </Wrapper>
        );
    }
}

const Wrapper = styled(`div`)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Autocomplete;