import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles
(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      textAlign: 'left',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'large',
      backgroundColor: theme.palette.background.paper,
      padding: '20px',
      alignContent: 'center',

    },
  }));



export default function ListViewNoteComponent() {
    // const classes = useStyles();
    const style=
{
    width: '100%',
    maxWidth: 360,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'large',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    alignContent: 'center',
    borderStyle: 'dotted',
    borderWidth: '2px',
    borderColor: '#D2B48C',
    borderRadius: '25px'
}
    return (
      
        <center>
        <List style={style}>
            <div className='container' style={{textAlign: 'left'}}>
         
        <h1>November 2, 2019</h1>
        </div>
        {/* this.props.entries.map((entry) => */}
        <ListItem style={{alignItems: 'flex-start'}}>
        <ListItemAvatar style={{margin:'0px'}}>
          <Avatar style={{background: "blue"}}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary= "I feel jealous of Shaun's new car.  I'm happy for him, but it seems really unfair that his parents bought him a brand new car.  I'm working every day after school just to save up for a used car." 
        secondary="6:50 am" 
        />
      </ListItem>



            {/* get rid of after mapping */}

            <ListItem style={{alignItems: 'flex-start'}}>
        <ListItemAvatar>
          <Avatar style={{background: "red"}}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Today I was very 
        sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
        secondary="7:57 am" />
      </ListItem>


{/* same */}

      <ListItem style={{alignItems: 'flex-start'}}>
        <ListItemAvatar >
          <Avatar style={{background: "pink"}}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Today I was very 
        sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
        secondary="9:50 am" />
      </ListItem>
      </List>


      </center>
        )
    // )

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
}

