import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OceanConservation.css';
import { FaLeaf, FaSearch, FaFish, FaChevronLeft } from 'react-icons/fa';

const OceanConservation = () => {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalltips');
        console.log('Topics from API:', response.data);
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching ocean conservation topics:', error);
      }
    };

    fetchTopics();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const filteredTopics = topics.filter((topic) => {
    const importantCategories = [
      'Recycling', 'Beach Clean-up', 'Marine Life', 
      'Sustainable Fishing', 'Pollution', 'Coral Reefs', 
      'Overfishing', 'Plastic Waste', 'Conservation Efforts'
    ];

    const topicCategory = importantCategories.find(category => 
      topic.title.toLowerCase().includes(category.toLowerCase()) ||
      topic.description.toLowerCase().includes(category.toLowerCase()) ||
      topic.content.toLowerCase().includes(category.toLowerCase())
    );

    return (
      (selectedCategory === 'All' || topicCategory === selectedCategory) &&
      (topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       topic.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="ocean-conservation">
      <video autoPlay muted loop className="background-video">
        <source src='https://assets.mixkit.co/videos/2091/2091-720.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-500 font-bold px-8 py-2 rounded-md"
      >
        Back
      </button>
      <div className="content">
        <h2 className="text-3xl font-bold mb-6 text-white text-center shadow-text">Ocean Conservation</h2>
        <div className="search-filter">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            <select value={selectedCategory} onChange={handleCategoryChange} className="filter-select">
              <option value="All">All</option>
              <option value="Recycling">Recycling</option>
              <option value="Beach Clean-up">Beach Clean-up</option>
              <option value="Marine Life">Marine Life</option>
              <option value="Sustainable Fishing">Sustainable Fishing</option>
              <option value="Pollution">Pollution</option>
              <option value="Coral Reefs">Coral Reefs</option>
              <option value="Overfishing">Overfishing</option>
              <option value="Plastic Waste">Plastic Waste</option>
              <option value="Conservation Efforts">Conservation Efforts</option>
            </select>
          </div>
        </div>
        <div className="grid">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div key={topic._id} className="tip-card">
                <div className="icon-container">
                  <FaLeaf className="icon" />
                  <FaFish className="marine-life-icon" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">{topic.title}</h3>
                <p className="text-gray-600 mt-2">{topic.description}</p>
                <p className="text-gray-700 mt-4">{topic.content}</p>
              </div>
            ))
          ) : (
            <p>No topics found for the selected category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OceanConservation;
