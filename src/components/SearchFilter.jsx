import React, { useState } from "react";

export default function SearchFilter({ onFilter }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const cities = [
    "Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata",
    "Pune","Ahmedabad","Jaipur","Lucknow","Chandigarh","Indore",
    "Bhopal","Patna","Surat","Nagpur","Kanpur","Noida","Gurgaon",
    "Meerut"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    onFilter({
      searchTerm: searchTerm.toLowerCase(),
      minPrice: minPrice ? parseInt(minPrice) : null,
      maxPrice: maxPrice ? parseInt(maxPrice) : null
    });
  };

  return (

    <form className="row mb-4" onSubmit={handleSubmit}>

      <div className="col-md-3">
        <select
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <option value="">All Locations</option>
          {cities.map((city, i) => (
            <option key={i} value={city.toLowerCase()}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <input
          type="number"
          placeholder="Min Price"
          className="form-control"
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="col-md-3">
        <input
          type="number"
          placeholder="Max Price"
          className="form-control"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="col-md-3">
        <button className="btn btn-primary w-100">
          Search
        </button>
      </div>

    </form>
  );
}