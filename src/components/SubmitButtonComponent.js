import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = (props) => {

    return (
        <div>
            <Button onClick={() => {
                props.updateDB();
                props.closePopup();
                }} color="primary">
                Submit
          </Button>
        </div>
    )
}

export default SubmitButton;