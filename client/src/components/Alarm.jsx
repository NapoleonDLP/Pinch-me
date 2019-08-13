import React from 'react';
import options from '../helpers.js';
import Alarms from './AlarmList.jsx';
import Alert from './Alert.jsx';

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
    this.deleteAlarm = this.deleteAlarm.bind(this);
  }

  componentDidMount() {
    this.setState({ alarms: this.props.alarms })
  }

  selectTime(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  deleteAlarm(e) {
    e.persist();
    const timeString = e.target.innerText;
    const alarm = {
      hour: timeString[0] + timeString[1],
      minute: timeString[3] + timeString[4],
      seconds: timeString[6] + timeString[7],
      ampm: timeString[9] + timeString[10],
    }
    fetch('http://localhost:3000/deleteAlarm', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alarm),
      })
      .then((result) => result.json())
      .then((result) => this.setState({ alarms: result }))
      .catch((err) => console.log(err));
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
      .then((result) => this.setState({ alarms: this.state.alarms.concat(result) }))
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
          <Alarms deleteAlarm={this.deleteAlarm} stateAlarms={this.state.alarms} propsAlarms={this.props.alarms} />
        </div>
        <div id="alert">
          <Alert time={this.props.time} stateAlarms={this.state.alarms} propsAlarms={this.props.alarms} />
        </div>
      </div>
    )
  }
}

export default Alarm
