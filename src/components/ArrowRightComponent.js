import React, { Component } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

//import PropTypes from 'prop-types';



export class ArrowRightComponent extends React.Component 
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
                <ArrowForwardIosIcon />
            </Fab >

        );

    }
}


const  buttonstyle = {
    background: '#ffb6c1',
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
  }



export default ArrowRightComponent
