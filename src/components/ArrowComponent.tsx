import React from 'react';
import PropType from 'prop-types';
import { Fab } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type ArrowProps = {
    handleClick: (direction: Number) => void;
    direction: String;
}

const ArrowComponent: React.FC<ArrowProps> = (props: ArrowProps) => {
    const directionNumber = (props.direction === "right") ? 1 : -1;
    return (
        <div>
            <Fab size='large' aria-label='add' variant='extended' 
                onClick={() => props.handleClick(directionNumber)}>
                {(directionNumber == 1) ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </Fab>
        </div>
    );
}

ArrowComponent.propTypes = {
    handleClick: PropType.func.isRequired,
    direction: PropType.instanceOf(String).isRequired
}

export default ArrowComponent;