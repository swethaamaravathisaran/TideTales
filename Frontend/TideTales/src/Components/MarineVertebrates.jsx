import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon
import './MarineVertebrates.css'; // Import your CSS file for styling

const MarineVertebrates = () => {
    const [marineVertebrates, setMarineVertebrates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMarineVertebrates();
    }, []);

    const fetchMarineVertebrates = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallvertebrates'); // Assuming backend API endpoint is at '/getallvertebrates'
            setMarineVertebrates(response.data);
        } catch (error) {
            console.error('Error fetching marine vertebrates:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMarineVertebrates = marineVertebrates.filter((vertebrate) =>
        vertebrate.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="marine-vertebrates-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="marine-vertebrates-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="marine-vertebrates-list-title">Marine Vertebrates List</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search vertebrates..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input "
                    />
                     <button className="marine-invertebrates-search-button">Search</button>
                </div>
                <div className="marine-vertebrates-cards mt-10">
                    {filteredMarineVertebrates.map((vertebrate) => (
                        <div key={vertebrate._id} className="marine-vertebrates-card">
                            <img src={vertebrate.image_url} alt={vertebrate.organism} className="marine-vertebrates-image" />
                            <div className="marine-vertebrates-details">
                                <h2 className="marine-vertebrates-title">{vertebrate.organism}</h2>
                                <p className="marine-vertebrates-taxonomy">
                                    Kingdom: {vertebrate.taxonomy.kingdom}<br />
                                    Phylum: {vertebrate.taxonomy.phylum}<br />
                                    Class: {vertebrate.taxonomy.class}<br />
                                    Order: {vertebrate.taxonomy.order}<br />
                                    Family: {vertebrate.taxonomy.family}<br />
                                    Genus: {vertebrate.taxonomy.genus}<br />
                                    Species: {vertebrate.taxonomy.species}<br />
                                </p>
                                <p className="marine-vertebrates-description">{vertebrate.description}</p>
                                <p className="marine-vertebrates-habitat"><strong>Habitat:</strong> {vertebrate.habitat}</p>
                                {/* <p className="marine-vertebrates-life-span"><strong>Life Span:</strong> {vertebrate.life_span}</p>
                                <p className="marine-vertebrates-diet"><strong>Diet:</strong> {vertebrate.diet}</p> */}
                                <p className="marine-vertebrates-distribution"><strong>Distribution:</strong> {vertebrate.distribution}</p>
                                <p className="marine-vertebrates-size"><strong>Size:</strong> {vertebrate.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarineVertebrates;
