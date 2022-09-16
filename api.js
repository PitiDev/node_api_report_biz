var express = require('express');
var router = express.Router();


const transactionStatus = require('./controllers/transaction_report');

router.use(transactionStatus);


module.exports = router;