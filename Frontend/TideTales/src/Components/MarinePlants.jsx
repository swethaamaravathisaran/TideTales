import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon
import './MarinePlants.css'; // Import your CSS file for styling

const MarinePlants = () => {
    const [marinePlants, setMarinePlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMarinePlants();
    }, []);

    const fetchMarinePlants = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallplants'); // Assuming backend API endpoint is at '/getallmarineplants'
            setMarinePlants(response.data);
        } catch (error) {
            console.error('Error fetching marine plants:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const filteredMarinePlants = marinePlants.filter((plant) =>
        plant.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="marine-plants-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="marine-plants-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="marine-plants-list-title">Marine Plants List</h1>
                <div className="search-bar mb-10">
                    <input
                        type="text"
                        placeholder="Search plants..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="marine-invertebrates-search-button">Search</button>
                </div>
                <div className="marine-plants-cards">
                    {filteredMarinePlants.map((plant) => (
                        <div key={plant._id} className="marine-plants-card">
                            <img src={plant.image_url} alt={plant.organism} className="marine-plants-image" />
                            <div className="marine-plants-details">
                                <h2 className="marine-plants-title">{plant.organism}</h2>
                                <p className="marine-plants-taxonomy">
                                    Kingdom: {plant.taxonomy.kingdom}<br />
                                    Phylum: {plant.taxonomy.phylum}<br />
                                    Class: {plant.taxonomy.class}<br />
                                    Order: {plant.taxonomy.order}<br />
                                    Family: {plant.taxonomy.family}<br />
                                    Genus: {plant.taxonomy.genus}<br />
                                    Species: {plant.taxonomy.species}<br />
                                </p>
                                <p className="marine-plants-description">{plant.description}</p>
                                <p className="marine-plants-habitat"><strong>Habitat:</strong> {plant.habitat}</p>
                                <p className="marine-plants-life-cycle"><strong>Life Cycle:</strong> {plant.life_cycle}</p>
                                <p className="marine-plants-ecological-role"><strong>Ecological Role:</strong> {plant.ecological_role}</p>
                                <p className="marine-plants-distribution"><strong>Distribution:</strong> {plant.distribution}</p>
                                <p className="marine-plants-size"><strong>Size:</strong> {plant.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarinePlants;
