const express = require('express');
const app = express();
const PORT = 8000;

const rappers= {
  '21 savage':{
    'age': 29,
    'birthname': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'juice wrld':{
    'age': 21,
    'birthname': 'Jarad Anthony Higgins',
    'birthLocation': 'Chicago, Illinois'
  },
  'rod wave':{
    'age': 26,
    'birthname': 'Rodarius Marcell Green',
    'birthLocation': 'Saint Petersburg, Florida'
  },
  'unknown':{
    'age': 26,
    'birthname': 'unkown',
    'birthLocation': 'unkown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if ( rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers['unknown'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
});
