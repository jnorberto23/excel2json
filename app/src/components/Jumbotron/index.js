import React from 'react';
import { Container } from 'react-bootstrap';
import {Wrapper} from './styled';

const Jumbotron = () => {
    return (
        <Container>
            <Wrapper className="text-center">
                <h1>Excel to Json converter</h1>
                <p>Convert excel to Json using excel2json Converter.
                    Click browse for an excel file and convert its data to Json.
                </p>
            </Wrapper>
        </Container>
    );
}

export default Jumbotron;
