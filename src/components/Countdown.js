import React from 'react';
const moment = require('moment');

class Countdown extends React.Component {

  render() {
    const duration = moment.duration(this.props.duration);
    return(
      <div className="Countdown">
        <div>
          <p>Years</p>
          <p>{duration.years()}</p>
        </div>
        <div>
          <p>Months</p>
          <p>{duration.months()}</p>
        </div>
        <div>
          <p>Days</p>
          <p>{duration.days()}</p>
        </div>
        <div>
          <p>Hours</p>
          <p>{duration.hours()}</p>
        </div>
        <div>
          <p>Minutes</p>
          <p>{duration.minutes()}</p>
        </div>
        <div>
          <p>Seconds</p>
          <p>{duration.seconds()}</p>
        </div>
      </div>
    );
  }
}

export default Countdown;
