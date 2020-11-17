import React, { Component } from 'react';
import { Input, /* Button */ } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
    onSearchTermUpdate: (term: string) => void;
}

class Search extends Component<Props> {

    onInput(e: any) {
        const input = e.currentTarget.value;
        this.props.onSearchTermUpdate(input);
    }

    render() {
        return (
            <Wrapper>
                <Item>
                    <Input onChange={(e) => this.onInput(e)} placeholder="Enter search term" />
                </Item>
                {/* <Item>
                    <Button variant="contained" color="primary">Search</Button>
                </Item> */}
            </Wrapper>
        );
    }
}

const Wrapper = styled(`div`)`
    width: 100vw;
    height: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Item = styled(`div`)`
    margin: 0 12px;
`;

export default Search;