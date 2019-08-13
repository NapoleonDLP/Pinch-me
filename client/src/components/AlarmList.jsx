import React from 'react';

function Alarms(props) {
  const allAlarms = props.propsAlarms.concat(props.stateAlarms);
    return (
      <div id="alarmList">
        {allAlarms.map((alarm, id) => (
          <div key={id} id="listHour">{alarm.hour}:{alarm.minute}:{alarm.seconds}  {alarm.ampm}</div>
        ))}
      </div>
    )
}

export default Alarms;
