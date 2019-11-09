import React from 'react';
import PropType from 'prop-types';
import { Fab } from '@material-ui/core';

type ArrowProps = {
    // TODO check for MouseEvent
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    suppliedIcon: JSX.Element;
}

const ArrowComponent: React.FC<ArrowProps> = (props: ArrowProps) => {
    return (
        <div>
            <Fab size='large' aria-label='add' variant='extended'>
                {props.suppliedIcon}
            </Fab>
        </div>
    );
}

ArrowComponent.propTypes = {
    // TODO add suppliedIcon and handleClick
}

export default ArrowComponent;