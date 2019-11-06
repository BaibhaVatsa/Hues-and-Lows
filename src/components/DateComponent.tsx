import React from 'react';
import PropType from 'prop-types';

type DateComponentProps = {
    date: Date;
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const DateComponent: React.FC<DateComponentProps> = (props: DateComponentProps) => {
    return (
        <div onClick={props.handleClick}>
            <div>{props.date.toLocaleString('default', { month: 'short' })}</div>
            <div>{props.date.getDate()}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
    );
}

DateComponent.propTypes = {
    date: PropType.instanceOf(Date).isRequired,
    // TODO add handleClick
}

export default DateComponent;