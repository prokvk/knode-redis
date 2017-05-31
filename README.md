knode-redis
===========

is a simple node module wrapper on `redis`.

# Install:

```
npm install --save knode-redis
```

# Usage:

## Config sample

```
redis:
	connection: "redis://#{process.env.REDIS}:#{process.env.REDIS_PORT}"
	prefix: "test_"
```

## JS sample

```javascript
var redis = require('knode-redis')(config);

redis.getClient(function(err, c) {
  return c.scard(redis.getName('myset'), function(err, out) {
    if (err) {
      console.log("ERROR: " + err);
    }
    return console.log(out); //out now contains cardinality of `test_myset` redis set
  });
});
```