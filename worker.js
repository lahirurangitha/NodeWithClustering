// Require the core node modules.
var http = require( "http" );

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Here, our Worker is running in a completely isolated V8 process - it doesn't share
// memory with the Cluster or with other Workers. The one notable exception is that it
// is allowed to the share PORTS with the Cluster. As such, each Worker will share
// port 8000 with the Cluster. Or, if this module was run as the application's entry
// point, it will just use port 8000 the same way it would without Clustering.
http
	.createServer(
		function handleRequest( request, response ) {

			response.writeHead(
				200,
				{
					"Content-Type": "text/html"
				}
			);
			response.write( "Hello world from process " + process.pid + "." );

			// In order to actually get the Cluster to distribute requests via the
			// default Round Robin algorithm - FOR THE DEMO - I have to hold the
			// request open so that I can generate concurrent requests to the Cluster.
			setTimeout( response.end.bind( response ), 300 );

		}
	)
	.listen( 8000 )
;