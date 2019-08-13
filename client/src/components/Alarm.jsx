import React from 'react';
import options from '../helpers.js';
import Alarms from './AlarmList.jsx';

class Alarm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 'hr',
      minute: 'min',
      seconds: 'sec',
      ampm: 'am',
      alarms: [],
    }
    this.selectTime = this.selectTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ alarms: this.props.alarms })
  }

  selectTime(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const form = e.target;
    e.preventDefault();
      fetch('http://localhost:3000/setAlarm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then((result) => result.json())
      .then((result) => this.setState({ alarms: result }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div id="alarmSelector">
              <select name="hour"onChange={this.selectTime} >
              <option name="hr" id="hrSelector">{this.state.hour}</option>
                {
                  options(12).map((option, id) => <option name={option} key={id}>{option}</option>)
                }
              </select>
              <select name="minute" onChange={this.selectTime}>
                <option name="min" id="minSelector">{this.state.minute}</option>
                {
                  options(59).map((option, id) => <option name={option} key={id}>{option}</option>)
                }
              </select>
              <select name="seconds" onChange={this.selectTime}>
                <option name="sec" id="secSelector">{this.state.seconds}</option>
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
        <div id="alarms">
          <Alarms stateAlarms={this.state.alarms} propsAlarms={this.props.alarms} />
        </div>
      </div>
    )
  }
}

export default Alarm
