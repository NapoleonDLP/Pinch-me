import React from 'react';

let alert = false;
let seconds = 0;
function Alert (props) {
  const allAlarms = props.propsAlarms.concat(props.stateAlarms);
  const currentTime = {
    hour: props.time[10] + props.time[11],
    minute: props.time[13] + props.time[14],
    seconds: props.time[16] + props.time[17],
    ampm: props.time[19] + props.time[20],
  }
  for(var i = 0; i < allAlarms.length; i++) {
    let alarm = allAlarms[i];
    if (alarm['minute'] === currentTime['minute'] && alarm['seconds'] === currentTime['seconds'] && alarm['ampm'].toUpperCase() === currentTime['ampm']) {
      alert = true;
    }
  }

  if (alert && seconds < 15) {
    seconds ++;
    if(seconds % 2 === 0) {
      return (
        <h1 id="alert">WAKE UP!</h1>
      )
    } else {
      return <h1></h1>
    }
  } else if (seconds > 15) {
    seconds = 0;
    alert = false;
    return <h1></h1>
  } else {
    return <h1></h1>
  }
}

export default Alert;
