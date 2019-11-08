import React from 'react';
import {useSpring, animated} from 'react-spring';
import logo from '../logo.svg';

const WelcomeView: React.FC<{}> = () => {
    const fadeIn = useSpring({
        config: {mass: 5, }
    });

    return (
        <>
            <animated.img src={logo} style={fadeIn} alt="Just playing with React logo"/>
        </>
    );
}

export default WelcomeView;