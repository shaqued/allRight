/* eslint-disable import/first */
require('dotenv-extended').load();

import createApp from './config/express';
import mongoose from 'mongoose';
import logger from 'env-bunyan';

export const app = createApp();

export let server;

const expressStarted = new Promise(resolve => {
  server = app.listen(process.env.PORT, () => {
    logger.info('Express listening on port %s', process.env.PORT);
    resolve();
  });
});

export const started = Promise.all([
  expressStarted
]);

export const close = () => {
  server.close();
  mongoose.connection.close();
};