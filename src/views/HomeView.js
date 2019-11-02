import React from 'react';
import AddButtonComponent from '../components/AddButtonComponent';
import ArrowLeftComponent from '../components/ArrowLeftComponent';
import ArrowRightComponent from '../components/ArrowRightComponent';
// import DateComponent from '../components/DateComponent';
import PinWheelComponent from '../components/PinWheelComponent';

export default class HomeView extends React.Component {
    render() {
        return (
            <div>
                <ArrowLeftComponent />
                {/* <DateComponent /> */}
                <PinWheelComponent colors={["black", "white", "blue"]}/>
                <ArrowRightComponent />
                <AddButtonComponent />
            </div>
        );
    }
}