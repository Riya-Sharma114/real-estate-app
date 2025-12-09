import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";
import PropertyCarousel from "../components/PropertyCarousel";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <h2 className="text-center mt-5">Property Not Found</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {property.images ? (
            <PropertyCarousel images={property.images} />
          ) : (
            <img src={property.image} className="img-fluid rounded" alt="" />
          )}
        </div>
        <div className="col-md-6">
          <h2>{property.title}</h2>
          <p className="text-muted">{property.location}</p>
          <h4 className="text-primary">₹ {property.price.toLocaleString()}</h4>
          <p className="mt-4">{property.description}</p>
        </div>
      </div>
    </div>
  );
}
