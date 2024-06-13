import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Import the icon
import './Benthos.css'; // Import your CSS file for styling

const Benthos = () => {
    const [benthos, setBenthos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchBenthos();
    }, []);

    const fetchBenthos = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallbenthos'); // Assuming backend API endpoint is at '/getallbenthos'
            setBenthos(response.data);
        } catch (error) {
            console.error('Error fetching benthos:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:4000/searchbenthos?search=${searchTerm}`); // Adjust endpoint as per your backend API
            setBenthos(response.data);
        } catch (error) {
            console.error('Error searching benthos:', error);
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const filteredBenthos = benthos.filter((benthosItem) =>
        benthosItem.organism.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="benthos-list-container">
            <video autoPlay loop muted className="background-video">
                <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rseL48eTitd99qgp/videoblocks-predatory-sharks-and-other-marine-life-large-aquarium-with-plants-and-tropical-colorful-fishes_sqozajet__2c622dc1a46dcd5184d8f09f329d1ee9__P360.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="benthos-content">
                <button
                    onClick={handleBackClick}
                    className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
                >
                    Back
                </button>
                <h1 className="benthos-list-title">Benthos List</h1>
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search benthos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
                <div className="benthos-cards">
                    {filteredBenthos.map((benthosItem) => (
                        <div key={benthosItem._id} className="benthos-card">
                            <img src={benthosItem.image_url} alt={benthosItem.organism} className="benthos-image" />
                            <div className="benthos-details">
                                <h2 className="benthos-title">{benthosItem.organism}</h2>
                                <p className="benthos-taxonomy">
                                    Kingdom: {benthosItem.taxonomy.kingdom}<br />
                                    Phylum: {benthosItem.taxonomy.phylum}<br />
                                    Class: {benthosItem.taxonomy.class}<br />
                                    Order: {benthosItem.taxonomy.order}<br />
                                    Family: {benthosItem.taxonomy.family}<br />
                                    Genus: {benthosItem.taxonomy.genus}<br />
                                    Species: {benthosItem.taxonomy.species}<br />
                                </p>
                                <p className="benthos-description">{benthosItem.description}</p>
                                <p className="benthos-habitat"><strong>Habitat:</strong> {benthosItem.habitat}</p>
                                <p className="benthos-life-span"><strong>Life Span:</strong> {benthosItem.life_span}</p>
                                <p className="benthos-diet"><strong>Diet:</strong> {benthosItem.diet}</p>
                                <p className="benthos-distribution"><strong>Distribution:</strong> {benthosItem.distribution}</p>
                                <p className="benthos-size"><strong>Size:</strong> {benthosItem.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benthos;
