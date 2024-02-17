import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <select>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {/* Product Cards */}
          {/* Sample Product Card */}
          <div className="product-card">
            <img src="product-image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>$99.99</p>
            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button onClick={() => addToCart({ name: 'Product Name', price: 99.99 })}>Add to Cart</button>
          </div>
          {/* End Sample Product Card */}
        </div>
      </main>
      <footer>
        <div className="cart">
          <span>Cart ({cart.length})</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
