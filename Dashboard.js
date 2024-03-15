// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="title-container">
        <h1>ERP System</h1>
        <h2>Dashboard</h2>
      </div>
      <div className="summary">
        <h2>Summary:</h2>
        <p>Total number of products: 5</p>
        <p>Total number of orders: 3</p>
      </div>
      <div className="navigation-links">
        <h2>Quick Navigation:</h2>
        <Link to="/products" className="navigation-link">Manage Products</Link>
        <Link to="/orders" className="navigation-link">Manage Orders</Link>
        <Link to="/orderscalendar" className="navigation-link">Orders Calendar</Link>
      </div>
    </div>
  );
}

export default Dashboard;
