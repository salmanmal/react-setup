import React from 'react';
import moment from 'moment';
import './RohanCountDown.scss';
export default class CountDown extends React.Component{

    render(){

        return (<div className="rohan-india">
        <div className="days">
Rohan is coming back to india IN
</div>
        <div className="day-count">
{moment("11/30/2018","MM/DD/YYYY").diff(moment(),'days')}
</div>
<div className="days">
Days...
</div>
        </div>)
    }
}