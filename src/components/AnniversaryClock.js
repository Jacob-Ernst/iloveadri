import React from 'react';
import Countdown from './Countdown';
const moment = require('moment');

class AnniversaryClock extends React.Component {
  constructor(props) {
    super(props);

    this.anniversary = moment('2017-07-16');

    this.state = {
      timeDated: moment().diff(this.anniversary),
      timeToAnniversary: 1
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      timeDated: prevState.timeDated + 1000
    }));
  }

  render() {
    let timePeriod = moment.duration(this.state.timeDated);
    return(
      <div>
        <Countdown duration={timePeriod}/>
      </div>
    );
  }
}

export default AnniversaryClock;
