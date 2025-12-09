import React, { useState } from "react";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SearchFilter from "../components/SearchFilter";

export default function Properties({ limit }) {
  const [filter, setFilter] = useState(null);

  const handleFilter = (filterObj) => {
    setFilter(filterObj);
  };

  let list = properties;

  if (filter) {
    list = list.filter(p => {
      const matchesSearch =
        p.title.toLowerCase().includes(filter.searchTerm) ||
        p.location.toLowerCase().includes(filter.searchTerm);
      const meetsMin = filter.minPrice ? p.price >= filter.minPrice : true;
      const meetsMax = filter.maxPrice ? p.price <= filter.maxPrice : true;
      return matchesSearch && meetsMin && meetsMax;
    });
  }

  if (limit) {
    list = list.slice(0, limit);
  }

  return (
    <div className="container mt-4">
      {!limit && <SearchFilter onFilter={handleFilter} />}
      <div className="row">
        {list.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
        {list.length === 0 && <p>No properties found.</p>}
      </div>
    </div>
  );
}
