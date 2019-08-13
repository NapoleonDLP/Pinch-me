const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alarm', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We are connected to database'));

const alarmSchema = new mongoose.Schema({
  hour: String,
  minute: String,
  seconds: String,
  ampm: String,
});

let Alarm = mongoose.model('Alarm', alarmSchema);

module.exports = {
  db, Alarm
}
