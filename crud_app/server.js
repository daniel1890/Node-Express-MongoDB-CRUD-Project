const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// parse request naar body-parser
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('CRUD applicatie');
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
