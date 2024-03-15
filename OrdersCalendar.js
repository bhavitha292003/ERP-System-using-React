// OrdersCalendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './OrdersCalendar.css';

function OrdersCalendar() {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', date: new Date(2024, 2, 17), status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', date: new Date(2024, 2, 16), status: 'Shipped' },
    { id: 3, customerName: 'Alice Johnson', date: new Date(2024, 2, 15), status: 'Delivered' }
  ]);

  // State to track selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filter orders for selected date
  const filteredOrders = orders.filter(order => order.date.toDateString() === selectedDate.toDateString());

  return (
    <div className="orders-calendar-container">
      <h2>Orders Calendar View</h2>
      <div className="calendar">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
      <div className="orders-list">
        <h3>Orders for {selectedDate.toDateString()}</h3>
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              <span>{order.customerName}</span>
              <span>{order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrdersCalendar;
