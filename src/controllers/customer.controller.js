const {customerService} = require('../services/index');

// Create a new customer
const createCustomer = async (req, res) => {
    try {
         
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve all customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a customer by ID
const getCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await customerService.getCustomerById(customerId);
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a customer by ID
const updateCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const updatedData = req.body;
        const customer = await customerService.updateCustomerById(customerId, updatedData);
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Delete a customer by ID
const deleteCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        await customerService.deleteCustomerById(customerId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
};
