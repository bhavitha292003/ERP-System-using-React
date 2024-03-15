// ProductsManagement.js

import React, { useState } from 'react';
import './ProductsManagement.css';

function ProductsManagement() {
  // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, quantity: 50 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20.99, quantity: 30 },
    { id: 3, name: 'Product 3', category: 'Category C', price: 14.00, quantity: 40 },
    { id: 4, name: 'Product 3', category: 'Category D', price: 12.99, quantity: 20 },
    { id: 5, name: 'Product 3', category: 'Category E', price: 11.05, quantity: 10 }
  ]);

  // State for form input fields
  const [formData, setFormData] = useState({ name: '', category: '', price: '', quantity: '' });

  // Function to handle form submission for adding a new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity)
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: '', price: '', quantity: '' }); // Clear form fields
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to delete a product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="products-container">
      <h2>Products Management</h2>
      <div className="add-product-form">
        <h3>Add Product</h3>
        <form onSubmit={handleAddProduct}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} min="0" step="0.01" required />
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} min="0" required />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className="product-list">
        <h3>Product List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsManagement;
