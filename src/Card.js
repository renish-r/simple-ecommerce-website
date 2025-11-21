// Card.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import "./Card.css";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  // Scroll to top smoothly
  const handleBuyClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="card-page" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Images/products.jpg)`
    }}>
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          {data.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={product.id}
            >
              <div className="card h-100 shadow-sm product-card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="price">Price: ${product.price}</p>
                  <p className="stock">In stock: {product.rating.count}</p>
                  <div className="mt-auto">
                    <button
                      className="btn-buy w-100"
                      onClick={handleBuyClick}
                    >
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
