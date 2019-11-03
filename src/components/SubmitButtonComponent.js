import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = (props) => {

    return (
        <div>
            <Button onClick={() => {
                props.updateDB(new Event(props.date, props.time, props.emotionsFromInputView, props.notesFromInputView));
                props.closePopup();
            }} color="primary">
                Submit
          </Button>
        </div>
    )
}

export default SubmitButton;