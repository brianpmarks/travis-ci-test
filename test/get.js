var superagent = require('superagent');

require('../server');

describe('GET', function() {
  describe('/hello.txt', function() {
    var agent = superagent.agent();
    it('should display Hello World', function(done) {
      agent.get('http://localhost:3000/hello.txt').end(function(err, res) {
        res.should.have.status(200);
        res.text.should.include('Hello World');
        return done();
      });
    });
  });
});
