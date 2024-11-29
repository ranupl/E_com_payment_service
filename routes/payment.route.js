const express = require('express');
const { initiatePayment, completePayment } = require('../controller/payment.controller');

const router = express.Router();

router.post('/initiate', initiatePayment);
router.post('/complete/:paymentId', completePayment);

module.exports = router;
