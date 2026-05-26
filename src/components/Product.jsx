import React, { useState } from "react";
import prod1 from "../imgs/prod1.png";
import prod2 from "../imgs/prod2.png";
import prod3 from "../imgs/prod3.png";
import prod4 from "../imgs/prod4.png";
import prod5 from "../imgs/prod5.png";
import prod6 from "../imgs/prod6.png";
import prod7 from "../imgs/prod7.png";
import prod8 from "../imgs/prod8.png";
import { ProductSection } from "./style";

const products = [
  { id: 1, name: "Cumin Seeds", category: "seed", image: prod1 },
  { id: 2, name: "Sesame Seeds", category: "seed", image: prod2 },
  { id: 3, name: "Fennel Seeds", category: "seed", image: prod3 },
  { id: 4, name: "Coriander Seeds", category: "seed", image: prod4 },
  { id: 5, name: "Groundnuts", category: "ground", image: prod5 },
  { id: 6, name: "Fenugreek seeds", category: "seed", image: prod6 },
  { id: 7, name: "Flax seeds", category: "seed", image: prod7 },
  { id: 8, name: "dill seeds", category: "seed", image: prod8 },
];

export const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterGround = () => {
    const foodProducts = products.filter(
      (product) => product.category === "ground",
    );

    setFilteredProducts(foodProducts);
  };
  const filterSeed = () => {
    const foodProducts = products.filter(
      (product) => product.category === "seed",
    );

    setFilteredProducts(foodProducts);
  };

  return (
    <ProductSection>
      <div className="head">
        <div className="headL">
          <h5>
            products <span>&mdash;&mdash; </span>
          </h5>
          <h1>Our products here..</h1>
        </div>
        <div className="headR">
          <button onClick={() => setFilteredProducts(products)}>All</button>
          <button onClick={filterSeed}>Seeds</button>
          <button onClick={filterGround}>Ground</button>{" "}
          <button onClick={filterSeed}>Seeds</button>
          <button onClick={filterGround}>Ground</button>{" "}
          <button onClick={filterSeed}>Seeds</button>
          <button onClick={filterGround}>Ground</button>
        </div>
      </div>
      <div className="main">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </ProductSection>
  );
};
