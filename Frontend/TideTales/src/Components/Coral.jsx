import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Coral.css'; // Import your CSS file for styling
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon

const Coral = () => {
    const [corals, setCorals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCorals();
    }, []);

    const fetchCorals = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallcorals'); // Assuming backend API endpoint is at '/getallcorals'
            setCorals(response.data);
        } catch (error) {
            console.error('Error fetching corals:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCorals = corals.filter((coral) =>
        coral.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="coral-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="coral-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="coral-list-title">Coral List</h1>
                <div className="coral-search">
                    <input
                        type="text"
                        placeholder="Search corals..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="search-button">Search</button>
                </div>
                <div className="coral-cards">
                    {filteredCorals.map((coral) => (
                        <div key={coral._id} className="coral-card">
                            <img src={coral.image_url} alt={coral.organism} className="coral-image" />
                            <div className="coral-details">
                                <h2 className="coral-title">{coral.organism}</h2>
                                <p className="coral-taxonomy">
                                    Kingdom: {coral.taxonomy.kingdom}<br />
                                    Phylum: {coral.taxonomy.phylum}<br />
                                    Class: {coral.taxonomy.class}<br />
                                    Order: {coral.taxonomy.order}<br />
                                    Family: {coral.taxonomy.family}<br />
                                    Genus: {coral.taxonomy.genus}<br />
                                    Species: {coral.taxonomy.species}<br />
                                </p>
                                <p className="coral-description">{coral.description}</p>
                                <p className="coral-habitat"><strong>Habitat:</strong> {coral.habitat}</p>
                                <p className="coral-life-cycle"><strong>Life Cycle:</strong> {coral.life_cycle}</p>
                                <p className="coral-ecological-role"><strong>Ecological Role:</strong> {coral.ecological_role}</p>
                                <p className="coral-distribution"><strong>Distribution:</strong> {coral.distribution}</p>
                                <p className="coral-size"><strong>Size:</strong> {coral.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coral;
