import React from 'react'
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import AddButton from './AddButtonComponent';

class CheckButton extends AddButton {
    render() {
        return (
            <Fab
                color='primary
                'size="small" aria-label="add"
                className={this.classes.fab}>
                <DoneIcon />
            </Fab >
        );
    }
}

export default CheckButton;