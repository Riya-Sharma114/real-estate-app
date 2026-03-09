import React from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {

  return (

    <div className="col-md-4 mb-4">

      <div className="card h-100 shadow">

        <img
          src={property.images ? property.images[0] : property.image}
          className="card-img-top"
          alt={property.title}
        />

        <div className="card-body">

          <h5 className="card-title">{property.title}</h5>

          <p className="text-muted">
            📍 {property.location}
          </p>

          <h6 className="text-primary">
            ₹ {property.price.toLocaleString()}
          </h6>

          <Link
            className="btn btn-outline-primary w-100 mt-2"
            to={`/property/${property.id}`}
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

  );
}