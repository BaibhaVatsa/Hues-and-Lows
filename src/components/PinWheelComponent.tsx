import React, { useEffect } from 'react';
import './Wheel.css';

type PinWheelProps = {
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    colours: string[];
}

// FIXME change default to a better colour
const DEFAULT: string = '#FFFFFF'; 

const PinWheelComponent: React.FC<PinWheelProps> = (props: PinWheelProps) => {

    useEffect(() => {
        // TODO add support for animation, blending, and more styles. And don't use conic-gradient
        let root: HTMLElement = document.documentElement;
        let length: number = props.colours.length;
        if (length === 0) {
            root.style.setProperty('--colors', DEFAULT);
        } else {
            let str: string =  props.colours.join(', ');
            // let finalStr: string = str.substr(0, str.length - 1);
            root.style.setProperty('--colors', str);
        }
    });

    return (
        <div onClick={props.handleClick} className='conic'>Hola</div>
    );
}

export default PinWheelComponent;