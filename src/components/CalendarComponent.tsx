import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

type CalendarComponentProps = {
    date: Date;
    changeDate: (newDate: Date | Date[]) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = (props: CalendarComponentProps) => {
    let handleDateChange = (newDate: Date | Date[]) => {
        props.changeDate(newDate);
    };

    return(
        <div>
            <Calendar 
                value={props.date}
                onChange={newDate => handleDateChange(newDate)}
                // TODO add Styles
            />
        </div>
    );
}

CalendarComponent.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
    // TODO add changeDate
}

export default CalendarComponent;