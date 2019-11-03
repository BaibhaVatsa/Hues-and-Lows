import React from 'react'
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const CheckButton = (props) => {
    let classes = makeStyles(theme => ({
        fab: {
          margin: theme.spacing(1)
        },
        extendedIcon: {
          marginRight: theme.spacing(1)
        }
      }));
  
    let history = useHistory();
  
      return (
        <Fab
          color="primary"
          size="small"
          aria-label="add"
          className={classes.fab}
          style={{cursor: "pointer"}}
        >
          <DoneIcon />
        </Fab>
      );
  }

export default CheckButton;