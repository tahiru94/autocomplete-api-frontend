import React, { Component } from 'react';
import axios from 'axios';

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
            <div>Placeholder</div>
        );
    }
}

export default Autocomplete;