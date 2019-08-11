import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <h1>Pinch Me</h1>
        <Clock />
      </div>
    )
  }
}

export default App
