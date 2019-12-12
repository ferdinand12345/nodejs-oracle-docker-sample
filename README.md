# NodeJS Oracle Sample Connection
Oracle Sample Connection is a sample source code for setup [OracleDB](https://www.npmjs.com/package/oracledb) packages and [ExpressJS](https://expressjs.com/).

## Installation
See Getting Started with [Node-oracledb](https://oracle.github.io/node-oracledb/doc/api.html#getstarted), [Quick Start Node-oracledb Installation](https://oracle.github.io/node-oracledb/INSTALL.html#quickstart), and [Installing Package with NPM](https://docs.npmjs.com/cli/install).
```bash
npm install
```

## Dockerizing NodeJS
Docker allows you to package an application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image.
### Build Images
```sh
docker build -t ferdinand12345/oracle-sample-connection .
```
### Build Container
```sh
docker run -p 3000:3000 -d ferdinand12345/oracle-sample-connection
```

## Configuration
Edit the database connection on config/database.js
```javascript
module.exports = {
	connection_name_syalala: {
		user : process.env.NODE_ORACLEDB_USER || "username",
		password : process.env.NODE_ORACLEDB_PASSWORD || "password",
		connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "hostname:port/service_name"
	}
}
```
Make a sure the Controller get a database connection.
```javascript
global.database = require( './config/database.js' );
const DB_CONNECTION_NAME_SYALALA = database.connection_name_syalala;
let connection = await OracleDB.getConnection( DB_CONNECTION_NAME_SYALALA );
```

## Authors
* **Ferdinand** - *ferdshinodas@gmail.com* 

## License
This project is licensed under the MIT License - see the [MIT](https://choosealicense.com/licenses/mit/) file for details
