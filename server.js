const express = require('express');
const next = require('next');
const shortid = require('shortid');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const checkValidId = (req, res, next) => {
  if (!req.params.id || !shortid.isValid(req.params.id)) {
    return;
  }
  next();
};

app.prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', checkValidId, (req, res) => (
      app.render(req, res, '/work', { id: req.params.id })
    ));

    server.get('*', (req, res) => (
      handle(req, res)
    ));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
