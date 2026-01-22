import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="error">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">Rs{product.price.toFixed(2)}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;