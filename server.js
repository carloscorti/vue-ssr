const express = require('express');
const path = require('path');
const fs = require('fs');

const config = {
  port: process.env.PORT || 3000
};

const app = express();

const indexHTML = fs.readFileSync(
  path.join(__dirname, 'public', 'index.html'),
  'utf-8'
);

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  // require('./build/dev-server')(app);
  console.info(`Running on ${process.env.NODE_ENV} mode`);
}

app.get('/*', (req, res) => {
  // res.send('index.html');
  res.write(indexHTML);
  res.end();
});

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  const runAdrres =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:${config.port}`
      : `port ${config.port}...`;
  console.info(`Running on ${runAdrres}`);
});
