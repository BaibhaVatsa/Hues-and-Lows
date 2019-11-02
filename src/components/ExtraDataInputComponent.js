import React from 'react';
import { Button } from '@material-ui/core';

class ExtraDataInput extends React.Component {
    render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    component="label"
                >
                Upload Images
                <input
                    type="file"
                    style={{ display: "none" }}
                />
                </Button>
            </div>
        );
    }
}

export default ExtraDataInput;