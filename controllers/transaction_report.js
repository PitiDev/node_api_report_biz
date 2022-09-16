var express = require('express');
var router = express.Router();
var jwt = require('../jwt');
var db = require('../db');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var oracledb = require('oracledb');


router.get('/transaction_status',async function (req, res) {
    let connection;
    try {
        let sql;
        connection = await oracledb.getConnection(db);
        sql = `SELECT * FROM company`;
        connection.execute(sql, [], function (err, result) {
            if (err) {
                console.error(err.message);
            }
            res.json({
                'status': 'success',
                'data': result.rows
            });
        });
    } catch (err) {
        console.error(err);
    }
});


module.exports = router;