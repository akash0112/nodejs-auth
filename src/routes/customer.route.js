const express = require('express');
const router = express.Router();
const {customerControllers} = require('../controllers/index');


router.post('/', customerControllers.createCustomer);
router.get('/', customerControllers.getAllCustomers);
router.get('/:id', customerControllers.getCustomerById);
router.put('/:id', customerControllers.updateCustomerById);
router.delete('/:id', customerControllers.deleteCustomerById);

module.exports = router;
