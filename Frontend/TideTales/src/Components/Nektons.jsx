import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Nektons.css'; // Import your CSS file for styling
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon

const Nektons = () => {
    const [nektons, setNektons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredNektons, setFilteredNektons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNektons();
    }, []);

    const fetchNektons = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallnektons'); // Assuming backend API endpoint is at '/getallnektons'
            setNektons(response.data);
            setFilteredNektons(response.data);
        } catch (error) {
            console.error('Error fetching nektons:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const filtered = nektons.filter((nekton) =>
            nekton.organism.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNektons(filtered);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="nekton-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="nekton-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                     Back
                </button>
                <h1 className="nekton-list-title">Nekton List</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search nektons..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
                <div className="nekton-cards mt-10">
                    {filteredNektons.map((nekton) => (
                        <div key={nekton._id} className="nekton-card">
                            <img src={nekton.image_url} alt={nekton.organism} className="nekton-image" />
                            <div className="nekton-details">
                                <h2 className="nekton-title">{nekton.organism}</h2>
                                <p className="nekton-taxonomy">
                                    Kingdom: {nekton.taxonomy.kingdom}<br />
                                    Phylum: {nekton.taxonomy.phylum}<br />
                                    Class: {nekton.taxonomy.class}<br />
                                    Order: {nekton.taxonomy.order}<br />
                                    Family: {nekton.taxonomy.family}<br />
                                    Genus: {nekton.taxonomy.genus}<br />
                                    Species: {nekton.taxonomy.species}<br />
                                </p>
                                <p className="nekton-description">{nekton.description}</p>
                                <p className="nekton-habitat"><strong>Habitat:</strong> {nekton.habitat}</p>
                                <p className="nekton-life-span"><strong>Life Span:</strong> {nekton.life_span}</p>
                                <p className="nekton-diet"><strong>Diet:</strong> {nekton.diet}</p>
                                <p className="nekton-distribution"><strong>Distribution:</strong> {nekton.distribution}</p>
                                <p className="nekton-size"><strong>Size:</strong> {nekton.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nektons;
