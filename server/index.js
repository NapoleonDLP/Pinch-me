const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { db, Alarm } = require('./db/connection.js')

// deliver static html
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/alarms', (req, res) => {
  Alarm.find((err, results) => {
    if (err) {
      res.sendStatus(500);
      console.log('Error finding records: ', err)
    } else {
      res.send(results);
    }
  })
});

app.post('/setAlarm', (req, res) => {
  // write alarm time to database
  const alarmSettings = req.body;
  // res with status code
  const newAlarm = new Alarm(alarmSettings);
  newAlarm.save((err, savedAlarm) => {
    if (err) {
      throw err
    }
    res.send(savedAlarm);
  })
});

app.delete('/deleteAlarm', (req, res) => {
  //delete alarm time from database
  const alarm = req.body;
  Alarm.findOneAndDelete(alarm, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      // res.send(result)
      Alarm.find((err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(result);
        }
      })
    }
  })

});

app.put('/', (req, res) => {
  // update alarm time to database
});

app.listen(port, () => console.log(`Listening to port ${port}`));
