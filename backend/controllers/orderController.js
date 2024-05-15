import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc  Create new order
// @route POST/api/products
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc  Get logged in user orders
// @route GET/api/orders/myOrders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc  Get order by id
// @route GET/api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc  Update Order to paid
// @route GET/api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("udpate order to paid");
});

// @desc  Update Order to paid
// @route GET/api/orders/:id/pay
// @access Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("udpate order to delivered");
});

// @desc  Get all orders
// @route GET/api/orders
// @access Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
