import React from 'react';
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';

const CalendarComponent = (props) => {
    let history = useHistory();
    return (
        <div>
            <Calendar onChange={() => history.push("/home")} value={props.date} />
        </div>
    );
    
}

export default CalendarComponent;