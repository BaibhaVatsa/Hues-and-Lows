import React from 'react';
import Button from '@material-ui/core/Button';

class MoodButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        return (
            <Button variant="outlined"
                onClick={this.props.felt.bind(this, this.state.clicked)}
            >
                {this.props.name}
            </Button>
        );
    }
}

export default MoodButton;