import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.time}</h1>
    )
  }
}

export default Clock
