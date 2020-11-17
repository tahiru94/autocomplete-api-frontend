import React, { Component } from 'react';
import axios from 'axios';

// Component imports
import { Search } from '../../components';

class Autocomplete extends Component {
    state = {
        searchTerm: '',
    }

    onSearchTermUpdate(searchTerm: string) {
        this.setState({
            searchTerm
        });
    }

    async onSearch() {
        const { searchTerm } = this.state;

        let result = await axios.get(`http://127.0.0.1/?search=${searchTerm}`);

        console.log(result);
    }

    render() {
        return (
            <Search />
        );
    }
}

export default Autocomplete;