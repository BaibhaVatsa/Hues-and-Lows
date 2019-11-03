import React from 'react';
import ListViewNoteComponent from '../components/ListViewNoteComponent';

export default class NotesView extends React.Component {
    render() {
        return (
            <div>
               <ListViewNoteComponent></ListViewNoteComponent>
            </div>
        );
    }
}