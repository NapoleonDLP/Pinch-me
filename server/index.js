const express = require('express');
const app = express();
const port = 3000;

// deliver static html

app.get('/', (req, res) => res.send('Hello world!'));

app.post('/', (req, res) => {
  // write alarm time to database

  // res with status code
});

app.delete('/', (req, res) => {
  //delete alarm time from database
});

app.put('/', (req, res) => {
  // update alarm time to database
});

app.listen(port, () => console.log(`Listening to port ${port}`));
