import React from 'react';

class MoodButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    render() {
        return (
            <div 
                style={{backgroundColor: this.props.emotion}} 
                onClick={this.props.felt.bind(this, this.state.clicked)}
            >
                <p>{this.props.emotion}</p>
            </div>
        );
    }
}

export default MoodButton;