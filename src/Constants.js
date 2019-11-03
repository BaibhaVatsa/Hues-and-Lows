import Emotion from './models/Emotion';

const Happy = new Emotion("Happy", "#01BEFE");
const Excited = new Emotion("Excited", "#FFDD00");
const Wonderful = new Emotion("Wonderful", "#dd9c00");
const Calm = new Emotion("Calm", "#4E78D7");
const Romantic = new Emotion("Romantic", "#800020");
const idk = new Emotion("I Don't Know", "#EEEEEE" );
const Stressed = new Emotion("Stressed", "#25282a" );
const Bored = new Emotion("Bored", "#542567");
const Lonely = new Emotion("Lonely", "#102551" );
const Tired = new Emotion("Tired", "##3a6965");
const Anxious = new Emotion("Anxious", "#3E5D48");
const Frustrated = new Emotion("Frustrated", "#A10800");

// const = new Emotion();
const AllEmotions = [Happy, Excited, Wonderful, Calm, Romantic, idk, Stressed, Bored, Lonely, Tired, Anxious, Frustrated];

export default AllEmotions;