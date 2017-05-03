/* eslint-disable no-console */

import express from 'express';
import { join } from 'path';

import constants from './config/constants';

import firstRouter from './firsts';
import userRouter from './users';
import middlewares from './config/middlewares';

require('./config/database');

const app = express();

middlewares(app);

// routers
app.use('/firsts', firstRouter);
app.use('/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'build/index.html'));
  });
}

if (!module.parent) {
  app.listen(constants.PORT, err => {
    console.log('THESE ARE THE CONSTANTS', constants);
    if (err) {
      console.error('Cannot run');
    } else {
      console.log(
        `
          Yep this is working 🍺
          App listen on port: ${constants.PORT} 🍕
          Env: ${process.env.NODE_ENV} 🦄
        `,
      );
    }
  });
}

export default app;
