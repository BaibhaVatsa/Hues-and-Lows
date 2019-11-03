import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';



// export class ListElementComponent extends Component {
//     render() {
//     return (
//         <div style = {useStyles}>
//         <List style={useStyles}>
          
          
//           <ListItem>
//           <ListItemAvatar >
//             <Avatar style={{background: "#f0f0f0f0"}}>
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Today I was very 
//           sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
//           secondary="6:50 am (if we have time?)" />
//         </ListItem>

//           <ListItem>
//             <ListItemAvatar>
//               <Avatar>
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="I love being presidentially harrassed by dominique piot. it's one of the most enjoyable leisureable activities that i've been able to hav ethe pleasure of partaking in. u should try it someday again soon."/>
//           </ListItem>
//           <ListItem>
//             <ListItemAvatar>
//               <Avatar>
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="piot is very cool. he is very good at teaching me computer organization. I love dominique piot." />
//           </ListItem>
//         </List>
//          </div>
//       )
     
//   }
// }

// export default ListElementComponent


const useStyles = makeStyles
(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function ListElementComponent() {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar >
            <Avatar style={{background: "#f0f0f0f0"}}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Today I was very 
          sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day." 
          secondary="6:50 am (if we have time?)" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{background: 'blue'}}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="WToday I was very 
          sad and very tired and I didn't know what to do with my life as it always seems to go out here on these streets. Bad day."
           secondary="7:30 am" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{background: 'red'}}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    )
}

