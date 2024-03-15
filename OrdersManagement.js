// OrdersManagement.js

import React, { useState } from 'react';
import './OrdersManagement.css';

function OrdersManagement() {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customerId: 101, customerName: 'John Doe', date: '2024-03-17', status: 'Pending' },
    { id: 2, customerId: 102, customerName: 'Jane Smith', date: '2024-03-16', status: 'Shipped' },
    { id: 3, customerId: 103, customerName: 'Alice Johnson', date: '2024-03-15', status: 'Delivered' }
  ]);

  // Function to delete an order
  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>
      <div className="order-list">
        <h3>Order List</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersManagement;
