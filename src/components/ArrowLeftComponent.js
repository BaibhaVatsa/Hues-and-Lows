import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightComponent from './ArrowRightComponent';

//import PropTypes from 'prop-types';



export class ArrowLeftComponent extends ArrowRightComponent
 {
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
    
  }



export default ArrowLeftComponent
