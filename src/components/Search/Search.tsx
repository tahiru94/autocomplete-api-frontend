import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class Search extends Component {

    onInput(e: any) {
        const input = e.currentTarget.value;
        console.log(input);
    }

    render() {
        return (
            <div>
                <Input onChange={(e) => this.onInput(e)} placeholder="Enter search term" />
                <Button variant="contained" color="primary">Search</Button>
            </div>
        );
    }
}

export default Search;