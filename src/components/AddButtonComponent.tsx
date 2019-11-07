import React from 'react';
import PropType from 'prop-types';
import { Fab } from '@material-ui/core';

type AddButtonProps = {
    // TODO look up MouseEvent option
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButtonComponent: React.FC<AddButtonProps> = (props: AddButtonProps) => {
    return (
        <div>
            <Fab color="primary" size="small" aria-label="add">
            </Fab>
        </div>
    );
}

AddButtonComponent.propTypes = {
    // TODO add handleClick
}

export default AddButtonComponent;