import React from 'react';

type PinWheelProps = {
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    colours: String[];
}

const PinWHeelComponent: React.FC<PinWheelProps> = (props: PinWheelProps) => {
    return (
        <div className="visualisation">
        </div>
    );
}

export default PinWHeelComponent;