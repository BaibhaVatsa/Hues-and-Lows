import React from 'react';
import MoodButton from './MoodButtonComponent';
import AllEmotions from '../Constants'

class MoodInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emotions: [],
            date: new Date(),
        };

    }

    addToList(emotion) {
        this.setState({
            emotions: this.state.emotions.concat(emotion)
        });
        this.props.res.bind(this, this.state.emotions);
    }

    render() {
        return (
            <div>
                <ul style={{ "listStyle": "none" }}>
                    {AllEmotions.map((value, index) => <li key={index}><MoodButton emotion={value} felt={this.addToList} /></li>)}
                </ul>
            </div>
        );
    }
}

export default MoodInput;