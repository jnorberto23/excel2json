import React from 'react';
import { Form } from 'react-bootstrap';


const InputFile = () => {
    return (
        <Form.Group controlId="formFile" className="mb-3" >
            <Form.Control type="file" />
        </Form.Group>

    )
}

export default InputFile;