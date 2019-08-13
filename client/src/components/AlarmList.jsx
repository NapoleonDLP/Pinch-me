import React from 'react';

function Alarms(props) {

    return (
      <div id="alarmList">
        {props.alarms.map((alarm, id) => (
          <div key={id} id="listHour">{alarm.hour}:{alarm.minute}:{alarm.seconds}  {alarm.ampm}</div>
        ))}
      </div>
    )
}

export default Alarms;
