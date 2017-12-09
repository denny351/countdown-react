import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import './datetime.css';

export default class Create extends React.Component {

  submitDate(e) {
    e.preventDefault();
    const pickedDate = e.target[0].value;
    const timestamp = moment(pickedDate, 'MM/DD/YYYY h:mm a').valueOf();
    this.props.createDate(timestamp);
    e.target[0].value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitDate.bind(this)}>
          <Datetime />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}