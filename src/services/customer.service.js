const {customerModel} = require('../models/index');

// Create a new customer
const createCustomer = async (customerData) => {
    const existingcustomer = await customerModel.findOne({name:customerData.name})
    if(existingcustomer)
    {
        throw new Error('User Already Exist'); 
    }
    try {
        const customer = await customerModel.create(customerData);
        return customer;
    } catch (error) {
        throw new Error('Failed to create a customer.');
    }
};

// Retrieve all customers
const getAllCustomers = async () => {
    try {
        const customers = await customerModel.find();
        return customers;
    } catch (error) {
        throw new Error('Failed to retrieve customers.');
    }
};

// Retrieve a customer by ID
const getCustomerById = async (customerId) => {
    try {
        const customer = await customerModel.findById(customerId);
        if (!customer) {
            throw new Error('Customer not found.');
        }
        return customer;
    } catch (error) {
        throw new Error('Failed to retrieve the customer.');
    }
};

// Update a customer by ID
const updateCustomerById = async (customerId, updatedData) => {
    try {
        const customer = await customerModel.findByIdAndUpdate(customerId, updatedData, { new: true });
        if (!customer) {
            throw new Error('Customer not found.');
        }
        return customer;
    } catch (error) {
        throw new Error('Failed to update the customer.');
    }
};

// Delete a customer by ID
const deleteCustomerById = async (customerId) => {
    try {
        const customer = await customerModel.findByIdAndRemove(customerId);
        if (!customer) {
            throw new Error('Customer not found.');
        }
    } catch (error) {
        throw new Error('Failed to delete the customer.');
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
};
