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
		connection_name_syalala: {
			user : process.env.NODE_ORACLEDB_USER || "username",
			password : process.env.NODE_ORACLEDB_PASSWORD || "password",
			connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "hostname:port/service_name"
		}
	}
