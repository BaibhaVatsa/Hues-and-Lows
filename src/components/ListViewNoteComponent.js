import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

// const useStyles = makeStyles
// (theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       textAlign: 'left',
//       fontFamily: 'Roboto, sans-serif',
//       fontSize: 'large',
//       backgroundColor: theme.palette.background.paper,
//       padding: '20px',
//       alignContent: 'center',

//     },
//   }));

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

export default function CustomizedDialogs() {
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
        View Notes
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
        {/* this.props.entries.map((entry) => */}
        <ListItem style={{alignItems: 'flex-start'}}>
        <ListItemAvatar style={{margin:'0px'}}>
          <Avatar style={{background: "blue"}}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary= "I feel jealous of Shaun's new car.  I'm happy for him, but it seems really unfair that his parents bought him a brand new car.  I'm working every day after school just to save up for a used car." 
        secondary="6:50 am" />
      </ListItem>

      </center>
        </DialogContent>


        </div>
      </Dialog>


      </div>
  );
}

// export default function ListViewNoteComponent() {
//     // const classes = useStyles();
    const style=
{
  //width of box
    width: '100%',
    maxWidth: 1400,

    
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'large',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    alignContent: 'center',
    borderStyle: 'dotted',
    borderWidth: '2px',
    borderColor: '#D2B48C',
    overflow:'hidden',
    position:'fixed'
}
//     return (
      
//         <center>
//         <List style={style}>
//             <div className='container' style={{textAlign: 'left'}}>
         
//         <h1>November 2, 2019</h1>
//         </div>
//         {/* this.props.entries.map((entry) => */}
//         <ListItem style={{alignItems: 'flex-start'}}>
//         <ListItemAvatar style={{margin:'0px'}}>
//           <Avatar style={{background: "blue"}}>
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary= "I feel jealous of Shaun's new car.  I'm happy for him, but it seems really unfair that his parents bought him a brand new car.  I'm working every day after school just to save up for a used car." 
//         secondary="6:50 am" 
//         />
//       </ListItem>



//             {/* get rid of after mapping */}

//             <ListItem style={{alignItems: 'flex-start'}}>
//         <ListItemAvatar>
//           <Avatar style={{background: "red"}}>
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Today I was very 
//         sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
//         secondary="7:57 am" />
//       </ListItem>

//  {/* same */}

//      <ListItem style={{alignItems: 'flex-start'}}>
//         <ListItemAvatar >
//          <Avatar style={{background: "pink"}}>
//        </Avatar>
//          </ListItemAvatar>
//                  <ListItemText primary="Today I was very 
//         sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
//       secondary="9:50 am" />
//      </ListItem>
//     </List>


//       </center>
//         )
    















    //   <List className={classes.root}>
    //     <ListItem>
    //       <ListItemAvatar >
    //         <Avatar style={{background: "#f0f0f0f0"}}>
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="Today I was very 
    //       sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
    //       secondary="6:50 am (if we have time?)" />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar style={{background: 'blue'}}>
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="WToday I was very 
    //       sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad da" secondary="7:30 am" />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar style={{background: 'red'}}>
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>
    //   </List>
    // )
    
    
