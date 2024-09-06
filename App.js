import React, { useState } from 'react';
import ProductGrid from './productgrid';
import SearchBar from './search';
import Cart from './cart';
import Filter from './filter';
import Sort from './sort';
import './App.css';

// Import images dynamically
const importAll = (r) => {
  return r.keys().map(r);
};
const images = importAll(require.context('./images', false, /\.(jpeg|jpg|png)$/));

const App = () => { 
  const [products, setProducts] = useState([
    { id: 1, name: 'Ramen Kimchi Flavor Noodles - 5 In 1 Pack Korea', price: 899, category: 'food', image: images[1] },
    { id: 2, name: 'Ghost Pepper Korean Ramen', price: 640, category: 'food', image: images[2] },
    { id: 3, name: 'Knorr Classic Thick Tomato Soup Mix', price: 50, category: 'food', image: images[3] },
    { id: 4, name: 'Knorr Spring Vegetable Soup', price: 60, category: 'food', image: images[4] },
    { id: 5, name: 'Barilla Mostaccioli Pasta', price: 395, category: 'food', image: images[5] },
    { id: 6, name: 'Pasta Prime Gift Pack', price: 1700, category: 'food', image: images[6] },
    { id: 7, name: 'Knorr Alfredo Pasta Sides', price: 300, category: 'food', image: images[7] },
    { id: 8, name: 'Onion', price: 70, category: 'vegetables', image: images[8] },
    { id: 9, name: 'Garlic', price: 60, category: 'vegetables', image: images[9] },
    { id: 10, name: 'Sprite - 2.25 ltr', price: 150, category: 'food', image: images[10] },
    { id: 11, name: 'Coka-Cola - 1.25 ltr', price: 80, category: 'food', image: images[11] },
    { id: 12, name: 'Wooden Hair Comb', price: 160, category: 'accessories', image: images[12] },
    { id: 13, name: 'Tresemmé Shampoo 24 Hour Volume', price: 800, category: 'accessories', image: images[13] },
    { id: 14, name: 'Biotin & Collagen Shampoo', price: 949, category: 'accessories', image: images[14] },
    { id: 15, name: 'Handmade Milk Soap', price: 560, category: 'accessories', image: images[15] },
    { id: 16, name: 'Samyang Hot Chicken Ramen Noodles 2X Spicy', price: 189, category: 'food', image: images[16] },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to handle sorting
  const handleSortChange = (sortValue) => {
    setSortOrder(sortValue);
  };

  // Function to handle filtering
  const handleFilterChange = (filterValue) => {
    setFilteredCategory(filterValue);
  };

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Apply filtering
  let displayedProducts = products;

  if (filteredCategory) {
    displayedProducts = displayedProducts.filter((product) => product.category === filteredCategory);
  }

  // Apply search
  if (searchQuery) {
    displayedProducts = displayedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }

  // Apply sorting
  if (sortOrder === 'price-asc') {
    displayedProducts = displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    displayedProducts = displayedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'name-asc') {
    displayedProducts = displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    displayedProducts = displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }
  return (
    <div className="app">
      <header>
        <h1>EcomMaster</h1>
        <div className="search-bar-container">
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="cart-container">
          <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      </header>
      <div className="filter-sort-container">
        <Filter handleFilterChange={handleFilterChange} />
        <Sort handleSortChange={handleSortChange} />
      </div>

      <div className="app">
        <div className="main-content">
          <ProductGrid products={displayedProducts} onAddToCart={handleAddToCart} />
        </div>

      </div>
    </div>
  );
};

export default App;
