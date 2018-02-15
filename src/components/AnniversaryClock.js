import React from 'react';
import Countdown from './Countdown';
const moment = require('moment');

class AnniversaryClock extends React.Component {
  constructor(props) {
    super(props);

    let anniversary = moment('2017-07-16');

    let nextAnniversary = moment({
      month: anniversary.month(), day: anniversary.day()
    });

    this.state = {
      timeDated: moment().diff(anniversary),
      timeToAnniversary: nextAnniversary.diff(moment())
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
      timeDated: prevState.timeDated + 1000,
      timeToAnniversary: prevState.timeToAnniversary - 1000,
    }));
  }

  render() {
    let timeDated = moment.duration(this.state.timeDated);
    let timeToAnniversary = moment.duration(this.state.timeToAnniversary);
    return(
      <div className="AnniversaryClock">
        <h2>We've Dated for...</h2>
        <Countdown duration={timeDated}/>
        <h2>Our Anniversary is in...</h2>
        <Countdown duration={timeToAnniversary}/>
      </div>
    );
  }
}

export default AnniversaryClock;
