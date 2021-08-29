import React from 'react';
import { InputGroup, FormControl, Container, Row } from 'react-bootstrap';
import { Wrapper } from './styled';

const Textarea = (props) => {
 const {value, onChange, id} = props;
    return (

        <Container>
            <Wrapper>
                <Row>
                    <InputGroup>
                        <FormControl 
                        as="textarea" 
                        rows="13" 
                        aria-label="With textarea" 
                        value={value}
                        onChange={onChange}
                        id={id}
                        />
                    </InputGroup>
                </Row>
            </Wrapper>
        </Container>

    )
}

export default Textarea;