import React, { Suspense } from 'react';
import logo from '../logo.svg';

const WelcomeView: React.FC<{}> = () => {
    return (
        <>
            <h1>Hello there</h1>   
            <img src={logo} alt="Just the logo"></img>  
        </>   
    );
}

export default WelcomeView;