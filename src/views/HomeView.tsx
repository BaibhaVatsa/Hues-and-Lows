import React from 'react';
import PinWheelComponent from '../components/PinWheelComponent';

type HomeViewProps = {

}

const HomeView: React.FC<HomeViewProps> = (props: HomeViewProps) => {
    return (
        <PinWheelComponent handleClick={() => alert('clicked!')} colours={['#d0c9d6', '#000000', '#787878']}></PinWheelComponent>
    );
}

export default HomeView;