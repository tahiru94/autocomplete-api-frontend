import React, { Component } from 'react';
import {
    Card,
    CardContent,
    // CardActions,
    Typography
} from '@material-ui/core';
import styled from 'styled-components';
import { Person } from '../../models';

interface Props {
    person: Person | undefined;
}

class DetailView extends Component<Props, {}> {
    render() {
        const output = this.props.person ?
            (
                <Card>
                    <CardContent>
                        <Typography variant="h3">
                            {this.props.person.name}
                        </Typography>
                        <Typography variant="h5">
                            {this.props.person.email}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: "10px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aliquam asperiores eius consequatur vero ab, animi optio est eos cumque porro quod doloremque libero expedita, delectus reiciendis saepe enim commodi.
                        </Typography>
                    </CardContent>
                </Card>
            ) :
            null;
        return (
            <Wrapper>
                {output}
            </Wrapper>
        );
    }
}

const Wrapper = styled(`div`)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default DetailView;