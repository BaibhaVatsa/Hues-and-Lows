import React from 'react';
import CancelButtonComponent from '../components/CancelButtonComponent';
import ExtraDataInputComponent from '../components/ExtraDataInputComponent';
//import MoodInputComponent from '../components/MoodInputComponent';
import NotesInputComponent from '../components/NotesInputComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';

export default class InputView extends React.Component {
    render() {
        return (
            <div>
                {/* <MoodInputComponent /> */}
                <NotesInputComponent />
                <ExtraDataInputComponent />
                <SubmitButtonComponent />
                <CancelButtonComponent />
            </div>
        );
    }
}