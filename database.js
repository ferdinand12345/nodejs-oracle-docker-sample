module.exports = {
	user          : process.env.NODE_ORACLEDB_USER || "db_user",
	password      : process.env.NODE_ORACLEDB_PASSWORD || "db_pass",
	connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "10.20.1.111:1521/tapapps",
};