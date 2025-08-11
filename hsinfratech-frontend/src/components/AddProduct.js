import React, { useState } from 'react';
import { addProduct } from '../api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    setProduct({ name: '', description: '', price: '' });
    alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" name="name" value={product.name} placeholder="Name" onChange={handleChange} required />
      <input type="text" name="description" value={product.description} placeholder="Description" onChange={handleChange} required />
      <input type="number" name="price" value={product.price} placeholder="Price" onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProduct;
