import React from 'react';
import Calendar from 'react-calendar';

class CalendarComponent extends React.Component {
    state = {
        date: new Date()
    }

    passOnChange = (newDate) => {
        this.setState({
            date: newDate
        });
        this.props.dateChosen.bind(this, this.state.date);
    }

    render() {
        return (
            <div>
                <Calendar onChange={this.passOnChange} value={this.props.date} />
            </div>
        );
    }
}

export default CalendarComponent;