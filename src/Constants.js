import Emotion from '../backend/models/Emotion'

const Happy = new Emotion("happy", "blue");
const Sad = new Emotion("sad", "black");
const Anxious = new Emotion("anxious", "red");
const Angry = new Emotion("angry", "white");
const Frustrated = new Emotion("frustrated", "black");
const Afraid = new Emotion("afraid", "black");
const Excited = new Emotion("excited", "yellow");
const Stressed = new Emotion("stressed", "black");
const Depressed = new Emotion();
// const = new Emotion();
const AllEmotions = [Happy, Sad, Anxious, Angry, Frustrated, Afraid, Excited, Stressed, Depressed];

export default AllEmotions;