const { initiatePaymentProcesss, processingPayment } = require('../service/payment.service');
const axios = require('axios');

const initiatePayment = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    const payment = await initiatePaymentProcesss(userId, amount);
    return res.status(201).json({ message: 'Payment initiated', payment });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to initiate payment', details: error.message });
  }
};

const completePayment = async (req, res) => {
  const { paymentId } = req.params;
  const orderData = req.body; 

  console.log(orderData, "orderData")
  const transactionId = "txn_1234567890";
  const orderUrl = 'http://localhost:5004/api/order/placeOrder';

  try {
    const payment = await processingPayment(paymentId, transactionId);
    if (payment.paymentStatus === 'SUCCESS') {
      const orderResponse = await axios.post(orderUrl, orderData);

      return res.status(200).json({ 
        message: 'Payment and order placement successful', 
        payment, 
        order: orderResponse.data 
      });
    } else {
      return res.status(400).json({ 
        message: 'Payment failed, order not placed', 
        payment 
      });
    }

  } catch (error) {
    return res.status(500).json({ error: 'Failed to process payment', details: error.message });
  }
};

module.exports = { initiatePayment, completePayment };
