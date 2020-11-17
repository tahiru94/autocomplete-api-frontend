import React, { Component } from 'react';
import axios from 'axios';

// Component imports
import { Search } from '../../components';

interface State {
    searchTerm: string;
}

class Autocomplete extends Component<{}, State> {
    state: State = {
        searchTerm: '',
    }

    onSearchTermUpdate = (searchTerm: string) => {
        this.setState({
            searchTerm
        });

        console.log(this.state);
    }

    async onSearch() {
        const { searchTerm } = this.state;

        let result = await axios.get(`http://127.0.0.1/?search=${searchTerm}`);

        console.log(result);
    }

    render() {
        return (
            <Search onSearchTermUpdate={this.onSearchTermUpdate} />
        );
    }
}

export default Autocomplete;