const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server').app;
const db = require('../server').db;
const should = chai.should();
chai.use(chaiHttp);

describe('Testing Server', () => {
  describe('Testing Connection', () => {
    it('should connect to db if providing correct credentials', (done) => {
      db.authenticate().then(done);
    });
  });
  describe('Testing The Endpoint', () => {
    it('should Get an object response with property data and nested property transactio<array>', (done) => {
      chai
        .request(app)
        .get('/transaction?page=2&per_page=8&seller_id=2')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have
            .property('data')
            .which.is.a('object')
            .and.has.property('transaction')
            .which.is.a('array');
          done();
        });
    });
  });
});
