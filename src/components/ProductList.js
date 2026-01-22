import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="grid">
        {productList.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">Rs{product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;