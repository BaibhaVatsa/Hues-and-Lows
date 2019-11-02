import React from 'react';
import CancelButtonComponent from '../components/CancelButtonComponent';
import ExtraDataInputComponent from '../components/ExtraDataInputComponent';
//import MoodInputComponent from '../components/MoodInputComponent';
import NotesInputComponent from '../components/NotesInputComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import AddButtonComponent from '../components/AddButtonComponent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default class InputView extends React.Component {
    constructor() {
        super();
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
            open: false,
            noteValue: '',
            value: '',
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

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}><AddButtonComponent /></Button>
                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">How are you feeling?</DialogTitle>
                    <DialogContent>
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
                                    <NotesInputComponent />
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" gutterBottom>
                                    <ExtraDataInputComponent />
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <MoodInputComponent /> */}

                        <SubmitButtonComponent />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}