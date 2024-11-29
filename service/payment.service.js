const { createPayment, updatePaymentStatus } = require('../store/payment.store');

const initiatePaymentProcesss = async (userId, amount) => {
  const paymentData = { userId, amount };
  return await createPayment(paymentData);
};

const processingPayment = async (paymentId, transactionId) => {
  return await updatePaymentStatus(paymentId, 'SUCCESS', transactionId);
};

module.exports = { initiatePaymentProcesss, processingPayment };
