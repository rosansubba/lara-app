import React from 'react';
import FanComponent from './FanComponent';
import FanCountComponent from './FanCountComponent';

export default function ApplianceComponent(){
    return(
        <>
            <FanComponent isOn={true} />
            <FanCountComponent totalFan={11} />
        </>
    )
}