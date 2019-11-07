import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

type CalendarComponentProps = {
    date: Date;
    handleDateChange: (newDate: Date | Date[]) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = (props: CalendarComponentProps) => {
    return(
        <div>
            <Calendar 
                value={props.date}
                onChange={newDate => props.handleDateChange(newDate)}
            />
        </div>
    );
}

CalendarComponent.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
    // TODO add changeDate
}

export default CalendarComponent;