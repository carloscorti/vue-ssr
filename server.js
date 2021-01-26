const express = require('express');
const path = require('path');
const fs = require('fs');

const { createBundleRenderer } = require('vue-server-renderer');

const config = {
  port: process.env.PORT || 3000
};

const app = express();

const template = fs.readFileSync(
  path.join(__dirname, 'template', 'index.html'),
  'utf-8'
);

const appBundle = require('./ssr/vue-ssr-server-bundle.json');

const clientManifest = require('./public/vue-ssr-client-manifest.json');

app.use(express.static('public'));
app.use('/icon', express.static(path.join(__dirname, 'images')));

if (process.env.NODE_ENV === 'development') {
  // require('./build/dev-server')(app);
  console.info(`Running on ${process.env.NODE_ENV} mode`);
}

app.get('/*', (req, res) => {
  const renderer = createBundleRenderer(appBundle, {
    runInNewContext: false,
    template,
    clientManifest
  });

  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send('server error');
    }
    res.send(html);
  });
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
