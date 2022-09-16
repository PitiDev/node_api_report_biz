// var mysql = require('mysql');
// var connection  = mysql.createPool({
//   connectionLimit : 10000,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '',
//   port            : 3306,
//   database        : 'app_flutter',
// });
// module.exports = connection;

let connection;
var oracledb = require('oracledb');

module.exports = (async function () {


  try {
    //  oracledb.initOracleClient({libDir: process.env.HOME + '/Downloads/instantclient_19_8'});
    // oracledb.initOracleClient({libDir: '/Users/pitidev-ldb/Downloads/instantclient_19_8'});
    connection = await oracledb.getConnection({
      user: "EBANK",
      password: "EBANK",
      connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST   = ldbmb-cluster-scan.ldblao.la)(PORT = 1521))(CONNECT_DATA =(SERVICE_NAME= MBPRODB)))"
    });
    console.log("Successfully connected to Oracle!")
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log("Error when closing the database connection: ", err);
      }
    }
  }
})()
