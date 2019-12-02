/*
|--------------------------------------------------------------------------
| Variable
|--------------------------------------------------------------------------
*/	
	// Controllers
	const Controllers = {
		v_1_0: {
			TestOracle: require( _directory_base + '/app/v1.0/Http/Controllers/TestOracleController.js' )
		}
	}
/*
 |--------------------------------------------------------------------------
 | Routing
 |--------------------------------------------------------------------------
 */
	module.exports = ( app ) => {
		/*
		 |--------------------------------------------------------------------------
		 | Welcome Message
		 |--------------------------------------------------------------------------
		 */
			app.get( '/', async function( req, res ) {
				return res.json( {
					message: "Oracle Sample Connection"
				} );
			} );

		/*
		 |--------------------------------------------------------------------------
		 | API Versi 1.0
		 |--------------------------------------------------------------------------
		 */
			app.get( '/api/v1.0/getdata', Controllers.v_1_0.TestOracle.getdata );
			app.get( '/api/v1.0/getdata/:ID', Controllers.v_1_0.TestOracle.getdata_by_parameter );
			app.post( '/api/v1.0/insertdata', Controllers.v_1_0.TestOracle.insertdata );
			app.put( '/api/v1.0/updatedata/:ID', Controllers.v_1_0.TestOracle.updatedata );
			app.delete( '/api/v1.0/deletedata/:ID', Controllers.v_1_0.TestOracle.deletedata );
	}