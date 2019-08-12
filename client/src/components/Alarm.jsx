import React from 'react';
import options from '../helpers.js';

class Alarm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      minute: null,
      seconds: null,
      ampm: 'am',
    }
    this.selectTime = this.selectTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectTime(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <label>
          <div id="alarmSelector">
            <select name="hour"onChange={this.selectTime} >
            <option name="hr" id="hrSelector">hr</option>
              {
                options(12).map((option, id) => <option name={option} key={id}>{option}</option>)
              }
            </select>
            <select name="minute" onChange={this.selectTime}>
              <option name="min" id="minSelector">min</option>
              {
                options(59).map((option, id) => <option name={option} key={id}>{option}</option>)
              }
            </select>
            <select name="seconds" onChange={this.selectTime}>
              <option name="sec" id="secSelector">sec</option>
              {
                options(59).map((option, id) => <option name={option} key={id}>{option}</option>)
              }
            </select>
            <select name="ampm" onChange={this.selectTime}>
              <option name="am">am</option>
              <option name="pm">pm</option>
            </select>
          </div>
        </label>
        <input type="submit" name="submit" id="setAlarm" value="Set Alarm" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Alarm
