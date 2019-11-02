import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.classes = makeStyles(theme => ({
            fab: {
                margin: theme.spacing(1),
            },
            extendedIcon: {
                marginRight: theme.spacing(1),
            },
        }));
        // this.isClicked = false;
    }

    // clicked() {
    //     this.setState({
    //         isClicked: true,
    //     })
    // }

    render() {
        return (
            <Fab
                color="primary" size="small" aria-label="add"
                className={this.classes.fab}
                style={{boxShadow: 'none'}}
                onClick={this.props.clicked}>
                <AddIcon />
            </Fab >
        );
    }

}

export default AddButton;