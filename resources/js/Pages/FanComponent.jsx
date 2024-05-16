import React from 'react';
import OnComponent from './OnComponent';
import OffComponent from './OffComponent';

export default function FanComponent(props){
    const {isOn} = props;
    // if(isOn){
    //     return <OnComponent />;
    // }else{
    //     return <OffComponent />;
    // }
    return(
        <>
            {isOn ? <OnComponent /> : <OffComponent />}
        </>
    )
}