import React from 'react'
import Fab from '@material-ui/core/Fab';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const CancelButton = (props) => {
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
          color="secondary"
          size="small"
          aria-label="add"
          className={classes.fab}
          style={{cursor: "pointer"}}
        >
          <CloseSharpIcon />
        </Fab>
      );
  }

export default CancelButton;