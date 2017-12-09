import React, { Component } from 'react';
import Countdown from './Countdown';
import Create from './Create'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dates: [1526886000000]
    }
    this.createDate = this.createDate.bind(this);
  }

  createDate(date) {
    const dates = [...this.state.dates, date];
    this.setState({dates}, function () {
      console.log(this.state.dates)
    })
  }

  render() {
    const dates = this.state.dates.map((date, i) => (
      <Countdown key={i} date={date} />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countdown App</h1>
        </header>

        <Create createDate={this.createDate} />

        {dates}

      </div>
    );
  }
}

export default App;
