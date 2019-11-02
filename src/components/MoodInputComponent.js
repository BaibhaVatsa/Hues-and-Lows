import React from 'react';
import MoodButton from './MoodButtonComponent';
import AllEmotions from '../Constants'

class MoodInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {emotions: []};
    }

    addToList(emotion) {
        this.setState({
            emotions: this.state.emotions.concat(emotion)
        });

        this.props.res.bind(this, emotions);
    }

    render() {
        return (
            <div>
                <h3>How are you feeling?</h3>
                <ul style={{"listStyle": "none"}}>
                    {AllEmotions.map((value, index) => <li key={index}><MoodButton emotion={value} felt={this.addToList} /></li>)}
                </ul>
            </div>
        );
    }
}

export default MoodInput;