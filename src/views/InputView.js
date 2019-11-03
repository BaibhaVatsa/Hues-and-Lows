import React from 'react';
import ExtraDataInputComponent from '../components/ExtraDataInputComponent';
import MoodInputComponent from '../components/MoodInputComponent';
import NotesInputComponent from '../components/NotesInputComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import AddButtonComponent from '../components/AddButtonComponent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class InputView extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            open: false,
            noteValue: '',
            value: '',
            emotion: []
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    };

    handleClose() {
        this.setState({
            open: false
        });
    };

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

    };

    displayNotes() {
        // const textFieldBig = this.classes.textField.splice();
        const useStyles = makeStyles
        if (this.state.noteValue) {
            return (
                <TextField
                    id="standard-multiline-flexible"
                    label=""
                    multiline
                    rowsMax="4"

                    value={this.state.noteValue}
                    onChange={this.handleChange}
                    className={this.textField}
                    margin="normal"
                />
            );
        }
    }

    getEmotions(emotions) {
        this.setState({
            emotions: emotions
        });
        console.log(this.state.emotion);
    }

    getNotes(notes) {
        this.setState({
            noteValue: notes
        });
        console.log(this.state.noteValue);
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}><AddButtonComponent /></Button>
                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" style={{ margin: "auto" }}>How are you feeling?</DialogTitle>
                    <DialogContent>
                        <Grid>
                            <Grid item>
                                <MoodInputComponent callbackFromInputView={() => { this.getEmotions() }} />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing="2"
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12}>
                                {this.displayNotes()}
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" gutterBottom>
                                    <NotesInputComponent callbackFromInputView={(note) => { this.getNotes(note) }}
                                    />
                                </Typography>
                            </Grid>
                            {/* <Grid item>
                                <Typography variant="body2" gutterBottom>
                                    <ExtraDataInputComponent />
                                </Typography>
                            </Grid> */}
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-end"
                        >
                            <Grid item><SubmitButtonComponent
                                emotionsFromInputView={this.state.emotions}
                                notesFromInputView={this.state.noteValue}
                                updateDB={this.props.updateDB} closePopup={this.handleClose} /></Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
                {this.state.noteValue}
            </div>
        );
    }
}