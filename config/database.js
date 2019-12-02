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
			tapdw: {
				user : process.env.NODE_ORACLEDB_USER || "TAP_DW",
				password : process.env.NODE_ORACLEDB_PASSWORD || "tapdw123#",
				connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "10.20.1.103:1521/tapdw"
			}
	}