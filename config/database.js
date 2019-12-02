/*
 |--------------------------------------------------------------------------
 | Database Connections
 |--------------------------------------------------------------------------
 |
 | Here are each of the database connections setup for your application.
 | Of course, examples of configuring each database platform that is
 | supported by NodeJS is shown below to make development simple.
 |
 */
	module.exports = {
		/*
		|--------------------------------------------------------------------------
		| Database Connections
		|--------------------------------------------------------------------------
		|
		| Here are each of the database connections setup for your application.
		| Of course, examples of configuring each database platform that is
		| supported by Laravel is shown below to make development simple.
		|
		|
		| All database work in Laravel is done through the PHP PDO facilities
		| so make sure you have the driver for your particular database of
		| choice installed on your machine before you begin development.
		|
		*/
			connection_name_syalala: {
				user : process.env.NODE_ORACLEDB_USER || "username",
				password : process.env.NODE_ORACLEDB_PASSWORD || "password",
				connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "hostname:port/service_name"
			}
	}
