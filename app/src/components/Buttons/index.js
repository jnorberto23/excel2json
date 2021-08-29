import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = (props) => {
    const { action, color, children } = props;

    return (
        <Button
            className={color}
            onClick={action}
         >
            {children}
        </Button>
    )
}

export default Buttons;