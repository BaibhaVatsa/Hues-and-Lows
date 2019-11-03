import React from 'react';
import CalendarComponent from '../components/CalendarComponent'

export default class CalendarView extends React.Component {
    render() {
        return (
            <CalendarComponent date={this.props.date}/>
        );
    }
}