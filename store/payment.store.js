const Payment = require('../model/payment.model');

const createPayment = async (paymentData) => {
  return await Payment.create(paymentData);
};

const updatePaymentStatus = async (paymentId, status, transactionId = null) => {
  return await Payment.findByIdAndUpdate(paymentId, { 
    paymentStatus: status, 
    transactionId,
    updatedAt: new Date()
  }, { new: true });
};

const getPaymentById = async (paymentId) => {
  return await Payment.findById(paymentId);
};

module.exports = { createPayment, updatePaymentStatus, getPaymentById };
