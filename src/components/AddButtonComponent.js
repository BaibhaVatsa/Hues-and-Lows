import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

class AddButton extends React.Component {
    constructor() {
        super();
        this.classes = makeStyles(theme => ({
            fab: {
                margin: theme.spacing(1),
            },
            extendedIcon: {
                marginRight: theme.spacing(1),
            },
        }));
        this.isClicked = false;
    }

    clicked() {
        this.setState({
            isClicked: true,
        })
    }

    render() {
        return (
            <Button
                color="primary" size="small" aria-label="add"
                className={this.classes.fab}>
                <AddIcon />
            </Fab >
        );
    }

}

export default AddButton;