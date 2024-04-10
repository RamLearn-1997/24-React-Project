import { useState, useEffect } from "react";
import Camera from "../assets/camera.svg"
import Mic from "../assets/mic.svg"
import Search from "../assets/search.svg"
import "../App.css";
import Suggestion from "./suggestion";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        products && products.length
          ? products.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredProducts(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event){
    setShowDropdown(false)
    setSearchParams(event.target.innerText)
    setFilteredProducts([])
  }

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts(data.products.map((productsItem) => productsItem.title));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  console.log(products, filteredProducts);

  useEffect(() => {
    fetchListOfProducts();
  }, []);


  

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Data is Loading please wait ...</h1>
      ) : (
        <div className="main">
        <h1>Progo</h1>
        <div className="search-inpt-container">
        <img className="img" src={Search} alt="Search" />
        <input
          value={searchParams}
          name="search-products"
          placeholder="Search Product ..."
          onChange={handleChange}
        />
        <img className="img i1" src={Mic} alt="Mic" />
        <img className="img" src={Camera} alt="Camera" />
        </div>
        </div>
      )}
      { showDropdown && <Suggestion handleClick={handleClick} data={filteredProducts}/>}
    </div>
  );
}
