import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon
import './MarineInvertebrates.css'; // Import your CSS file for styling

const MarineInvertebrates = () => {
    const [marineInvertebrates, setMarineInvertebrates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMarineInvertebrates();
    }, []);

    const fetchMarineInvertebrates = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallinvertebrates'); // Assuming backend API endpoint is at '/getallinvertebrates'
            setMarineInvertebrates(response.data);
        } catch (error) {
            console.error('Error fetching marine invertebrates:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredInvertebrates = marineInvertebrates.filter((invertebrate) =>
        invertebrate.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="marine-invertebrates-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="marine-invertebrates-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="marine-invertebrates-list-title">Marine Invertebrates List</h1>
                <input
                    type="text"
                    placeholder="Search invertebrates..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="marine-invertebrates-search-input mb-10"
                />
                <button className="marine-invertebrates-search-button">Search</button>
                <div className="marine-invertebrates-cards">
                    {filteredInvertebrates.map((invertebrate) => (
                        <div key={invertebrate._id} className="marine-invertebrates-card">
                            <img src={invertebrate.image_url} alt={invertebrate.organism} className="marine-invertebrates-image" />
                            <div className="marine-invertebrates-details">
                                <h2 className="marine-invertebrates-title">{invertebrate.organism}</h2>
                                <p className="marine-invertebrates-taxonomy">
                                    Kingdom: {invertebrate.taxonomy.kingdom}<br />
                                    Phylum: {invertebrate.taxonomy.phylum}<br />
                                    Class: {invertebrate.taxonomy.class}<br />
                                    Order: {invertebrate.taxonomy.order}<br />
                                    Family: {invertebrate.taxonomy.family}<br />
                                    Genus: {invertebrate.taxonomy.genus}<br />
                                    Species: {invertebrate.taxonomy.species}<br />
                                </p>
                                <p className="marine-invertebrates-description">{invertebrate.description}</p>
                                <p className="marine-invertebrates-habitat"><strong>Habitat:</strong> {invertebrate.habitat}</p>
                                {/* <p className="marine-invertebrates-life-span"><strong>Life Span:</strong> {invertebrate.life_span}</p>
                                <p className="marine-invertebrates-diet"><strong>Diet:</strong> {invertebrate.diet}</p> */}
                                <p className="marine-invertebrates-distribution"><strong>Distribution:</strong> {invertebrate.distribution}</p>
                                <p className="marine-invertebrates-size"><strong>Size:</strong> {invertebrate.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarineInvertebrates;
