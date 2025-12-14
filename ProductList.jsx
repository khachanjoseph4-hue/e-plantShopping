const productsByCategory = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 9.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "ZZ Plant", price: 12.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Peace Lily", price: 14.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Spider Plant", price: 7.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Pothos", price: 8.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Aloe Vera", price: 10.99, image: "https://via.placeholder.com/150" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 6.99, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Lavender", price: 8.49, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Sunflower", price: 5.99, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Hibiscus", price: 11.99, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Tulip", price: 9.49, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Daisy", price: 4.99, image: "https://via.placeholder.com/150" },
  ],
};

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

const productsByCategory = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 9.99, image: "link1" },
    { id: 2, name: "ZZ Plant", price: 12.99, image: "link2" },
    // add 4 more
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 7.99, image: "link7" },
    { id: 8, name: "Lavender", price: 6.99, image: "link8" },
    // add 4 more
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      {Object.entries(productsByCategory).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {items.map((product) => (
              <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
                <img src={product.image} alt={product.name} width="100%" />
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
