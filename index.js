(function() {
  var redis;

  redis = require('redis');

  module.exports = function(config) {
    var p_client;
    p_client = null;
    return {
      initPool: function(done) {
        p_client = redis.createClient(config.connection);
        p_client.on('error', function(err) {
          return console.log("REDIS client error: " + err);
        });
        return done(null, p_client);
      },
      getClient: function(done) {
        if (!p_client) {
          return this.initPool(done);
        }
        return done(null, p_client);
      },
      getName: function(name) {
        return "" + config.prefix + name;
      }
    };
  };

}).call(this);
