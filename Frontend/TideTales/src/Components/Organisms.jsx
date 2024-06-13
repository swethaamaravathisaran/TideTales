import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import './Organisms.css'; // Import your CSS file for styling

const Organisms = () => {
    const [organisms, setOrganisms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOrganisms, setFilteredOrganisms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrganisms();
    }, []);

    useEffect(() => {
        setFilteredOrganisms(
            organisms.filter((organism) =>
                organism.organism.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, organisms]);

    const fetchOrganisms = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallorganisms'); // Assuming backend API endpoint is at '/getallorganisms'
            setOrganisms(response.data);
        } catch (error) {
            console.error('Error fetching organisms:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="organism-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="organism-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="organism-list-title">Organisms List</h1>
                <input
                    type="text"
                    placeholder="Search for an organism..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
                 <button className="marine-invertebrates-search-button">Search</button>
                <div className="organism-cards">
                    {filteredOrganisms.map((organism) => (
                        <div key={organism._id} className="organism-card">
                            <img src={organism.image_url} alt={organism.name} className="organism-image" />
                            <div className="organism-details">
                                <h2 className="organism-title">{organism.organism}</h2>
                                <p className="organism-taxonomy">
                                    Kingdom: {organism.taxonomy.kingdom}<br />
                                    Phylum: {organism.taxonomy.phylum}<br />
                                    Class: {organism.taxonomy.class}<br />
                                    Order: {organism.taxonomy.order}<br />
                                    Family: {organism.taxonomy.family}<br />
                                    Genus: {organism.taxonomy.genus}<br />
                                    Species: {organism.taxonomy.species}<br />
                                </p>
                                <p className="organism-description">{organism.description}</p>
                                <p className="organism-habitat"><strong>Habitat:</strong> {organism.habitat}</p>
                                <p className="organism-distribution"><strong>Distribution:</strong> {organism.distribution}</p>
                                <p className="organism-size"><strong>Size:</strong> {organism.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Organisms;
