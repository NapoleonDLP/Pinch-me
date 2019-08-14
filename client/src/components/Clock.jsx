import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="clock">
        <h1 id="time">{this.props.time.substring(10, this.props.time.length)}</h1>
      </div>
    )
  }
}

export default Clock
