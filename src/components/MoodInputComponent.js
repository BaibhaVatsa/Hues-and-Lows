import React from 'react';
import AllEmotions from '../Constants'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

class MoodInput extends React.Component {
    constructor(props) {
        super(props);
        this.classes = makeStyles(theme => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
            },
        }));
        this.state = {
            emotions: [],
            date: new Date(),
            moodNames: AllEmotions.map((value, _) => value.getName()),
        };
        // this.getName();
    }


    addToList(emotion) {
        this.setState({
            emotions: this.state.emotions.concat(AllEmotions[emotion].getColor())
        });
    }

    BootstrapButton = withStyles({
        root: {
            boxShadow: 'none',
            textTransform: 'uppercase',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#487ca2',
            borderColor: '#007bff',
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:hover': {
                backgroundColor: '#0069d9',
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        },
    })(Button);

    render() {
        return (
            < div >
                {this.getName}
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(0) }}>Sad
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(1) }}>Calm
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(2) }}>IDK
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(3) }}>Stressed
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(4) }}>Lonely
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(5) }}>Bored
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(6) }}>Happy
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(7) }}>Tired
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(8) }}>Excited
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(9); }}>Romantic
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(10) }}>Anxious
                        </this.BootstrapButton>
                    </Grid>
                    <Grid item>
                        <this.BootstrapButton variant="contained" color="secondary" size="large"
                            onClick={() => { this.addToList(11) }}>Frustrated
                        </this.BootstrapButton>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default MoodInput;