import { expect } from 'code';
import Lab from 'lab';
import express from 'express';
import request from 'supertest';
import routes from '../../../server/routes/index';

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

experiment('The Server', () => {
  const app = express();
  app.use('/', routes);

  test('serves an example endpoint', () =>
    request(app)
      .get('/api/tags')
      .expect(200)
      .expect(response => expect(response.body).to.include('node')));

  test('returns html on unknozwn endpoint', () => request(app)
    .get('/*')
    .expect(response => expect(response.header['content-type']).to.equal('text/html; charset=UTF-8')));
});
