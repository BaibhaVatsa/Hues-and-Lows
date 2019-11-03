import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const AddButton = (props) => {
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
        onClick={() => history.push("/input")}
      >
        <AddIcon />
      </Fab>
    );
}

export default AddButton;
