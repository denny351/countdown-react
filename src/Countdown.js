import React, { Component} from 'react';
import moment from 'moment';


export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a'),
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getRemainingTime(this.props.date);
  }

  componentDidMount() {
    setInterval(() => this.getRemainingTime(this.props.date), 1000)
  }

  getRemainingTime(date) {
    const timeDiff = date - moment().valueOf();
    const months = moment.duration(timeDiff).months();
    const days = moment.duration(timeDiff).days();
    const hours = moment.duration(timeDiff).hours();
    const minutes = moment.duration(timeDiff).minutes();
    const seconds = moment.duration(timeDiff).seconds();

    this.setState({months, days, hours, minutes, seconds})
  }

  //Make each line not move side to side
  emptySpace(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    return (
      <div>
        <div>Countdown to {this.state.endDate}</div>

        {(this.state.months > 0)?
          <div>{this.emptySpace(this.state.months)} Months</div>
          : null
        }
        <div>{this.emptySpace(this.state.days)} Days</div>
        <div>{this.emptySpace(this.state.hours)} Hours</div>
        <div>{this.emptySpace(this.state.minutes)} Minutes</div>
        <div>{this.emptySpace(this.state.seconds)} Seconds</div>
      </div>
    );
  }
}