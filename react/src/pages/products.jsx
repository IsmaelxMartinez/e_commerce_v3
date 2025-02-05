import "../styles/product.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/productCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //get the curreny url  query params
  const location = useLocation();

  // Function to get query params
  const getCategoryFromQuery = () => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get("category");
  };

  //fetch products when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    const category = getCategoryFromQuery();
    if (category) {
      handleFilter(category);
    } else {
      setFilteredProducts(products);
    }
  }, [location, products]);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <main>
      <section>
        <div className="filter-group">
          <p>Filter:</p>
          <button
            className="filter-btn"
            onClick={() => handleFilter("professional")}
          >
            Professional
          </button>
          <button className="filter-btn" onClick={() => handleFilter("indoor")}>
            Indoor
          </button>
          <button
            className="filter-btn"
            onClick={() => handleFilter("outdoor")}
          >
            Outdoor
          </button>
          <button
            className="filter-btn"
            onClick={() => handleFilter("accessory")}
          >
            Accessory
          </button>
          <button className="filter-btn" onClick={() => handleFilter("all")}>
            All
          </button>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          {filteredProducts.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
