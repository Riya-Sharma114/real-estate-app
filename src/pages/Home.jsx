import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Footer from "../components/Footer";


export default function Home() {

    const navigate = useNavigate();

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

                        <select>
                            <option>Location</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Noida</option>
                            <option>Bangalore</option>
                        </select>

                        <select>
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>House</option>
                            <option>Commercial</option>
                        </select>

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

            {/* PROPERTY CATEGORIES */}

            <section className="categories">

                <h2>Explore Property Options</h2>

                <div className="category-grid">

                    <div className="category-card">
                        <span className="icon">🏠</span>
                        <h3>Buy Property</h3>
                        <p>Find your perfect home from verified listings.</p>
                    </div>

                    <div className="category-card">
                        <span className="icon">🔑</span>
                        <h3>Rent Property</h3>
                        <p>Discover apartments and homes available for rent.</p>
                    </div>

                    <div className="category-card">
                        <span className="icon">📈</span>
                        <h3>Sell Property</h3>
                        <p>List your property and connect with buyers.</p>
                    </div>

                    <div className="category-card">
                        <span className="icon">🏢</span>
                        <h3>Commercial</h3>
                        <p>Find offices, shops and commercial spaces.</p>
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

                {/* MORE BUTTON */}

                <div className="more-container">
                    <button
                        className="more-btn"
                        onClick={() => navigate("/properties")}
                    >
                        More ↓
                    </button>
                </div>

            </section>

            {/* LOCATIONS */}

            <section className="locations">

                <h2>Explore Properties By Location</h2>

                <div className="location-grid">

                    <div className="location-card">
                        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5" alt="Delhi" />
                        <h3>Delhi</h3>
                        <p>120+ Properties</p>
                    </div>

                    <div className="location-card">
                        <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f" alt="Mumbai" />
                        <h3>Mumbai</h3>
                        <p>200+ Properties</p>
                    </div>

                    <div className="location-card">
                        <img src="https://images.unsplash.com/photo-1592647420148-bfcc177e2117" alt="Noida" />
                        <h3>Noida</h3>
                        <p>95+ Properties</p>
                    </div>

                    <div className="location-card">
                        <img src="https://images.unsplash.com/photo-1697130383976-38f28c444292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww" alt="Bangalore" />
                        <h3>Bangalore</h3>
                        <p>150+ Properties</p>
                    </div>

                </div>

            </section>

            {/* WHY CHOOSE US */}

            <section className="why">

                <h2>Why Choose Our Platform</h2>

                <div className="why-grid">

                    <div className="why-card">
                        <span>✔</span>
                        <h3>Verified Listings</h3>
                        <p>All properties are verified and trusted.</p>
                    </div>

                    <div className="why-card">
                        <span>👨‍💼</span>
                        <h3>Expert Agents</h3>
                        <p>Professional agents to help you anytime.</p>
                    </div>

                    <div className="why-card">
                        <span>💰</span>
                        <h3>Best Prices</h3>
                        <p>Affordable and competitive property deals.</p>
                    </div>

                    <div className="why-card">
                        <span>📞</span>
                        <h3>24/7 Support</h3>
                        <p>Customer support available anytime.</p>
                    </div>

                </div>

            </section>

            {/* STATS */}

            <section className="stats">

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>1200+</h2>
                        <p>Properties Sold</p>
                    </div>

                    <div className="stat-card">
                        <h2>800+</h2>
                        <p>Happy Clients</p>
                    </div>

                    <div className="stat-card">
                        <h2>50+</h2>
                        <p>Expert Agents</p>
                    </div>

                    <div className="stat-card">
                        <h2>15+</h2>
                        <p>Cities Covered</p>
                    </div>

                </div>

            </section>

            {/* TESTIMONIALS */}

            <section className="testimonials">

                <h2>What Our Clients Say</h2>

                <div className="review-grid">

                    <div className="review-card">
                        <p>"Found my dream home within a week. Amazing service!"</p>
                        <h4>Riya</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>

                    <div className="review-card">
                        <p>"The platform made buying property very easy."</p>
                        <h4>Rupak</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>

                    <div className="review-card">
                        <p>"Great agents and smooth experience."</p>
                        <h4>Veenu</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>

                </div>

            </section>

            {/* Footer */}
            <Footer />

        </div>
    );
}