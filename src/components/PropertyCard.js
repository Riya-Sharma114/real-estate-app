import React from "react";
import { Link } from "react-router-dom";


export default function PropertyCard({ property }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={property.image} className="card-img-top" alt="Property" />
                <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text text-muted">{property.location}</p>
                    <p className="fw-bold">₹ {property.price.toLocaleString()}</p>
                    <Link className="btn btn-outline-primary" to={`/property/${property.id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}