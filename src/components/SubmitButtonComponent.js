import React from 'react';
import Button from '@material-ui/core/Button';

export default function SubmitButton() {
    const [isClicked, setisClicked] = React.useState(false);

    const handleClick = () => {
        setisClicked(true);
    };

    return (
        <div>
            <Button onClick={handleClick} color="primary">
                Submit
          </Button>
        </div>
    )
}