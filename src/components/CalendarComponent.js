import React from "react";
import {Calendar} from "react-calendar";
import { useHistory } from "react-router-dom";



import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        View Calendar
      </Button>



      <Dialog 
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth='true'>



        <div>
     
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          November 2, 2019
        </DialogTitle>

        <DialogContent style={{overflow: 'hidden'}} dividers>

        <center>

        <div className='container' style={{textAlign: 'left'}}>
        </div>
     
     <div style = {calendarStyle()}>
      <Calendar
       onChange={date => {
          props.changeDate(date);
          history.replace("/home");
        }}
        value={props.date}
        style={{height: '100 vh'}}
      />

      </div>
      </center>
        </DialogContent>


        </div>
      </Dialog>


      </div>
  );
}


let calendarStyle = () => {
  return {
    
    margin: "auto",
    height: 'auto'
  };



// const CalendarComponent = props => {
  // let history = useHistory();

  // const calendarclass ={
  //   width: '50%',
  // }
 
//   };
//   return (
//     <div style={calendarStyle()}>
//       <Calendar
//         onChange={date => {
//           props.changeDate(date);
//           history.replace("/home");
//         }}
//         value={props.date}
//         style={{height: '100 vh'}}
//       />
//     </div>
//   );
// };

// export default CalendarComponent;
}
