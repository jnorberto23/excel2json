import React from 'react';
import { InputGroup, Container, Row } from 'react-bootstrap';
import { Wrapper, WrapperTextArea} from './styled';

const Textarea = (props) => {
 const {value, onChange, id} = props;
    return (

        <Container>
              <Wrapper>
                <Row>
                    <InputGroup>
                        <WrapperTextArea 
                        as="textarea" 
                        rows="13" 
                        readOnly
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