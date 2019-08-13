import React from 'react';
import Clock from './Clock.jsx';
import Alarm from './Alarm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      alarms: [],
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000
    );

  fetch('http://localhost:3000/alarms')
    .then((result) => result.json())
    .then((result) => this.setState({ alarms: result }))
    .catch((err) => console.log('err'));
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div id="app" >
        <div id="header">
          <h1 id="name">Pinch Me</h1>
          <h1 id="date">{this.state.time.substring(0, 9)}</h1>
        </div>
        <Clock time={this.state.time} />
        <Alarm alarms={this.state.alarms} time={this.state.time} />
      </div>
    )
  }
}

export default App
