import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Message sent successfully!");
    };

    return (

        <div className="contact-page">

            {/* HERO */}

            <section className="contact-hero">
                <h1>Contact DreamEstate</h1>
                <p>Have questions? Our team is ready to help you find your perfect property.</p>
            </section>


            <section className="contact-container">

                <div className="contact-grid">

                    {/* CONTACT INFO */}

                    <div className="contact-info">

                        <h2>Get In Touch</h2>

                        <div className="info-card">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Office Address</h4>
                                <p>Connaught Place, New Delhi, India</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="icon">📞</span>
                            <div>
                                <h4>Phone Number</h4>
                                <p>+91 7505700853</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="icon">📧</span>
                            <div>
                                <h4>Email Address</h4>
                                <p>info@dreamestate.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="icon">⏰</span>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Sat : 9 AM - 7 PM</p>
                            </div>
                        </div>

                    </div>


                    {/* CONTACT FORM */}

                    <div className="contact-form">

                        <h2>Send Us a Message</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button className="send-btn">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* MAP */}

            <section className="map-section">

                <h2>Find Us On Map</h2>

                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=New%20Delhi&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                />

            </section>

        </div>

    );

}