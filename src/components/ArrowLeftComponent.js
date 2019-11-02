import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

class ArrowLeftComponent extends React.Component
 {
    constructor() {
        super();
        this.classes = makeStyles(theme => ({
            fab: {
                margin: theme.spacing(1),
            }
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
            <Fab
                size="large" aria-label="add"
                variant='extended'
                className={this.classes.fab}
                style={buttonstyle}
                onClick={() => this.clicked()}>
                <ArrowBackIosIcon />
            </Fab >
        );

    }
}


const  buttonstyle = {
    background: '#ffb6c1',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: 'none',
  }



export default ArrowLeftComponent
