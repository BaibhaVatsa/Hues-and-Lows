import React, { useRef } from 'react';
import {useSpring, useChain, useTrail, animated} from 'react-spring';
import logo from '../logo.svg';
// import { useHistory } from 'react-router-dom';

const WelcomeView: React.FC<{}> = () => {
    // let history = useHistory();

    const fadeInRef = useRef(null);

    const fadeIn = useSpring({
        config: {mass: 25, tension: 170, clamp: true},
        from: {opacity: 0},
        to: {opacity: 1}, 
        ref: fadeInRef
    });

    let beatRef = useRef(null);

    const beat = useSpring({
        config: {mass: 20, tension: 170, clamp: true},
        from: {width: '50%'},
        to: {width: '53%'},
        ref: beatRef
    });

    const fadeOutRef = useRef(null);

    const fadeOut = useSpring({
        config: {mass: 25, tension: 170, clamp: true},
        from: {opacity: 1},
        to: {opacity: 0}, 
        ref: fadeInRef
    });

    useChain([fadeInRef, beatRef, fadeOutRef], [0, 2, 4]);

    // const trail = useTrail(3, () => );

    return (
        <>
            <animated.img src={logo} style={{...fadeIn, ...beat, ...fadeOut}} alt='Just playing with React logo'/>
        </>
    );
}

export default WelcomeView;