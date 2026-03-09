import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Footer from "../components/Footer";

export default function Home() {

    const navigate = useNavigate();

    // Alphabetical list of major Indian cities
    const cities = [
        "Agra","Ahmedabad","Ajmer","Aligarh","Allahabad","Amritsar","Aurangabad",
        "Bangalore","Bareilly","Belgaum","Bhopal","Bhubaneswar","Bikaner",
        "Chandigarh","Chennai","Coimbatore","Cuttack",
        "Dehradun","Delhi","Dhanbad","Durgapur",
        "Faridabad",
        "Ghaziabad","Goa","Gorakhpur","Gurgaon","Guwahati","Gwalior",
        "Hyderabad",
        "Indore",
        "Jaipur","Jalandhar","Jammu","Jamshedpur","Jhansi","Jodhpur",
        "Kanpur","Kochi","Kolhapur","Kolkata","Kota",
        "Lucknow","Ludhiana",
        "Madurai","Mangalore","Meerut","Mohali","Moradabad","Mumbai","Mysore",
        "Nagpur","Nashik","Noida",
        "Patna","Pondicherry","Pune",
        "Raipur","Rajkot","Ranchi",
        "Salem","Shimla","Siliguri","Solapur","Surat",
        "Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirupati",
        "Udaipur",
        "Vadodara","Varanasi","Vijayawada","Visakhapatnam",
        "Warangal"
    ];

    const properties = [
        {
            id: 1,
            title: "Luxury Villa",
            price: "₹1.5 Cr",
            location: "Delhi",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
            id: 2,
            title: "Modern Apartment",
            price: "₹85 Lakh",
            location: "Mumbai",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
        },
        {
            id: 3,
            title: "Family House",
            price: "₹60 Lakh",
            location: "Noida",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        }
    ];

    return (
        <div>

            {/* HERO SECTION */}

            <section className="hero">
                <div className="hero-content">
                    <h1>Find Your Dream Property</h1>

                    <ul className="hero-list">
                        <li>Buy Property</li>
                        <li>Sell Property</li>
                        <li>Rent Property</li>
                        <li>Luxury Villas</li>
                        <li>Modern Apartments</li>
                        <li>Commercial Spaces</li>
                    </ul>

                    {/* SEARCH BAR */}

                    <div className="search-bar">

                        {/* LOCATION SELECT */}
                        <select>
                            <option>Location</option>

                            {cities.map((city, index) => (
                                <option key={index}>{city}</option>
                            ))}

                        </select>

                        {/* PROPERTY TYPE */}
                        <select>
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>House</option>
                            <option>Commercial</option>
                        </select>

                        {/* BUDGET */}
                        <select>
                            <option>Budget</option>
                            <option>₹20L - ₹50L</option>
                            <option>₹50L - ₹1Cr</option>
                            <option>₹1Cr - ₹3Cr</option>
                            <option>₹3Cr+</option>
                        </select>

                        <button className="search-btn">
                            🔍 Search
                        </button>

                    </div>

                    <div className="explore-container">
                        <button
                            className="explore-btn"
                            onClick={() => navigate("/properties")}
                        >
                            Explore Properties
                        </button>
                    </div>

                </div>
            </section>

            {/* FEATURED PROPERTIES */}

            <section className="featured">

                <h2>Featured Properties</h2>

                <div className="grid">
                    {properties.map((p) => (
                        <div key={p.id} className="card">

                            <img src={p.image} alt={p.title} />

                            <div className="card-body">
                                <h3>{p.title}</h3>
                                <p>{p.location}</p>
                                <h4>{p.price}</h4>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="more-container">
                    <button
                        className="more-btn"
                        onClick={() => navigate("/properties")}
                    >
                        More ↓
                    </button>
                </div>

            </section>

            {/* Footer */}
            <Footer />

        </div>
    );
}