require(TEST_HELPER); // <--- This must be at the top of every test file.

const request = require('supertest');
const routes  = require(__server + '/routes/index.js');

describe('The Server', function() {

  const app = TestHelper.createApp();
  app.use('/', routes);
  app.testReady();

  it_("serves an example endpoint", function * () {
    yield request(app)
      .get('/api/tags')
      .expect(200)
      .expect(function(response) {
        expect(response.body).to.include('node');
      });
  });
});
