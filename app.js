// external modules
const express = require('express');

// setting up app and view engine
const app = express();
app.set('view engine', 'pug');

app.use(express.static('./public'))

// primary (and only?) get request
app.get('/', (req, res) => {
  res.render('index');
  // res.sendFile('index.html');
});

const port = 5001;

app.listen(port, () => console.log(`Listening on port ${port}...`));