import React, { useEffect } from 'react';

type PinWheelProps = {
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    colours: string[];
}

const DEFAULT: string = '#FFFFFF'; 

const PinWHeelComponent: React.FC<PinWheelProps> = (props: PinWheelProps) => {

    useEffect(() => {
        let root = document.documentElement;
        root.style.setProperty('--colors', (props.colours.length === 0) ? DEFAULT : props.colours.join(' '));
    });

    return (
        <>
            <p className='conic'></p>
        </>
    );
}

export default PinWHeelComponent;