import React from 'react';
import Clock from './Clock.jsx';
import Alarm from './Alarm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000
    );
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
        <h1>Pinch Me</h1>
        <Clock time={this.state.time} />
        <Alarm time={this.state.time} />
      </div>
    )
  }
}

export default App
