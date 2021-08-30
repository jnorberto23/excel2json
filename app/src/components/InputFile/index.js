import React from 'react';
import { Form } from 'react-bootstrap';


const InputFile = (props) => {
    const {onChange, multiple, accept} = props;
    return (
        <Form.Group 
        controlId="formFile" 
        className="mb-3" >
            <Form.Control 
            type="file" 
            onChange={onChange}
            multiple={multiple}
            accept={accept}/>
        </Form.Group>

    )
}

export default InputFile;