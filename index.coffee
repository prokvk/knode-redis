redis = require 'redis'

module.exports = (config) ->

	p_client = null

	initPool: (done) ->
		p_client = redis.createClient(config.connection)
		p_client.on 'error', (err) -> console.log "REDIS client error: #{err}"

		done null, p_client

	getClient: (done) ->
		return @initPool done unless p_client

		done null, p_client

	getName: (name) -> "#{config.prefix}#{name}"