import React from 'react'
import Fab from '@material-ui/core/Fab';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import AddButton from './AddButtonComponent';

class CancelButton extends AddButton {
    render() {
        return (
            <Fab
                color="secondary" size="small" aria-label="add"
                className={this.classes.fab}>
                <CloseSharpIcon />
            </Fab >
        );
    }
}

export default CancelButton;