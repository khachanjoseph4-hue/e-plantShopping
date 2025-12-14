import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <h2>Our Plants</h2>
      <ul>
        {products.map((plant, index) => (
          <li key={index}>
            <h4>{plant.name}</h4>
            <p>{plant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
