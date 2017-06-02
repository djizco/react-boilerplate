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

  test('serves an example endpoint', done => {
    request(app)
      .get('/api/tags')
      .expect(200)
      .expect(response => expect(response.body).to.include('node'))
      .then(() => done());
  });

  test('returns 404 on unknown endpoints', done => {
    request(app)
      .get('/*')
      .expect(404)
      .expect(response => expect(response.body).to.be.empty())
      .then(() => done());
  });
});
