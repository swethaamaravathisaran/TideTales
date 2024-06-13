import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Planktons.css'; // Import your CSS file for styling
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon

const Planktons = () => {
    const [planktons, setPlanktons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPlanktons();
    }, []);

    const fetchPlanktons = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallplanktons'); // Assuming backend API endpoint is at '/getallplanktons'
            setPlanktons(response.data);
        } catch (error) {
            console.error('Error fetching planktons:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlanktons = planktons.filter((plankton) =>
        plankton.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="plankton-list-container">
            <video autoPlay loop muted className="background-video w-full">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="plankton-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-6  left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                   Back
                </button>
                <h1 className="plankton-list-title">Plankton List</h1>
                <div className="search-bar mb-10">
                    <input
                        type="text"
                        placeholder="Search planktons..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="marine-invertebrates-search-button">Search</button>
                </div>
                <div className="plankton-cards">
                    {filteredPlanktons.map((plankton) => (
                        <div key={plankton._id} className="plankton-card">
                            <img src={plankton.image_url} alt={plankton.organism} className="plankton-image" />
                            <div className="plankton-details">
                                <h2 className="plankton-title">{plankton.organism}</h2>
                                <p className="plankton-taxonomy">
                                    Kingdom: {plankton.taxonomy.kingdom}<br />
                                    Phylum: {plankton.taxonomy.phylum}<br />
                                    Class: {plankton.taxonomy.class}<br />
                                    Order: {plankton.taxonomy.order}<br />
                                    Family: {plankton.taxonomy.family}<br />
                                    Genus: {plankton.taxonomy.genus}<br />
                                    Species: {plankton.taxonomy.species}<br />
                                </p>
                                <p className="plankton-description">{plankton.description}</p>
                                <p className="plankton-habitat"><strong>Habitat:</strong> {plankton.habitat}</p>
                                <p className="plankton-life-cycle"><strong>Life Cycle:</strong> {plankton.life_cycle}</p>
                                <p className="plankton-ecological-role"><strong>Ecological Role:</strong> {plankton.ecological_role}</p>
                                <p className="plankton-distribution"><strong>Distribution:</strong> {plankton.distribution}</p>
                                <p className="plankton-size"><strong>Size:</strong> {plankton.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Planktons;
