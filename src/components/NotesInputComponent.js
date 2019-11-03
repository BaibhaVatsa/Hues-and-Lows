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

const useStyles = makeStyles(theme => ({
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

export default function NoteInput() {
    // constructor() {
    //     super();
    //     this.classes = makeStyles(theme => ({
    //         container: {
    //             display: 'flex',
    //             flexWrap: 'wrap',
    //         },
    //         textField: {
    //             marginLeft: theme.spacing(1),
    //             marginRight: theme.spacing(1),
    //             width: 200,
    //         },
    //     }));
    //     this.state = {
    //         open: false,
    //         noteValue: '',
    //         value: '',
    //     };
    //     this.handleClickOpen = this.handleClickOpen.bind(this);
    //     this.handleClose = this.handleClose.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [valueT, setValue] = React.useState("");
    const [note, setNote] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function sendNote() {
        this.props.callbackFromInputView(valueT);
    }

    const showText = () => {
        if (note.length > 0) {
            return (
                <TextField
                    id="standard-multiline-flexible"
                    label=""
                    multiline
                    rowsMax="4"

                    value={valueT}
                    onChange={handleChange}
                    className={classes.textField}
                    margin="normal"
                />
            );
        }
    }

    const pickString = () => {
        if (note.length > 0) {
            return (
                note
            );
        } else {
            return (
                valueT
            );
        }
    }

    return (
        <div>
            <Button variant="outlined" color="secondary" size="large" onClick={handleClickOpen}>
                Add Notes
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Notes</DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-multiline-flexible"
                        label=""
                        multiline
                        rowsMax="4"

                        value={valueT}
                        onChange={handleChange}
                        className={classes.textField}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        handleClose();
                        setValue('')
                    }}
                    ><CancelButton /></Button>
                    {/* // ok button */}
                    <Button
                        onClick={() => {

                            setNote(valueT);
                            handleClose();
                            //     setValue()
                            //     this.setState({
                            //         noteValue: this.value
                            //     });
                            // }}
                        }}><CheckButton /></Button>
                </DialogActions>
            </Dialog>
            {sendNote}
        </div>
    );
}

