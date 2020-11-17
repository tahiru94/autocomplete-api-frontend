import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';
import Person from '../../models/person';

interface Props {
    people: Person[];
}

class Results extends Component<Props, {}> {

    generateListItems() {
        return this.props.people.map((person: Person) => {
            return (
                <ListItem key={person.id}>
                    {person.name}
                </ListItem>
            );
        });
    }

    render() {
        console.log('people', this.props.people);
        return (
            <Wrapper>
                <List>
                    {this.generateListItems()}
                </List>
            </Wrapper>
        );
    }
}

const Wrapper = styled(`div`)`
    width: 100vw;
    height: 250px;
    margin: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
`;

export default Results;