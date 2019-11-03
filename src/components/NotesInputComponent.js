import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelButton from './CancelButtonComponent';
import CheckButton from './CheckButtonComponent';

class NoteInput extends React.Component {
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

    sendNote() {
        this.props.callbackFromInputView(this.state.noteValue);
    }

    showText() {
        if (this.state.noteValue.length > 0) {
            return (
                <TextField
                    id="standard-multiline-flexible"
                    label=""
                    multiline
                    rowsMax="4"

                    value={this.state.noteValue}
                    onChange={this.handleChange}
                    className={this.classes.textField}
                    margin="normal"
                />
            );
        }
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="secondary" size="large" onClick={this.handleClickOpen}>
                    Add Notes
        </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Notes</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="standard-multiline-flexible"
                            label=""
                            multiline
                            rowsMax="4"

                            value={this.value}
                            onChange={this.handleChange}
                            className={this.classes.textField}
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}><CancelButton /></Button>
                        <Button
                            onClick={() => {
                                this.handleClose();
                                this.setState({
                                    noteValue: this.state.value
                                });
                            }}><CheckButton /></Button>
                    </DialogActions>
                </Dialog>
                {/* {this.state.noteValue} */}
            </div>
        );
    }
}
export default NoteInput;