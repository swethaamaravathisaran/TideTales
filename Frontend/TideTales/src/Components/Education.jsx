import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlayCircle, FaBook, FaQuestionCircle, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallresources');
        setResources(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchResources();
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

  const filteredResources = resources.filter((resource) => {
    return (
      (selectedCategory === 'All' || resource.category === selectedCategory) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="educational-resources min-h-screen relative">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://v7.cdnpk.net/videvo_files/video/partners1364/large_preview/hd592764b_20181002_0682.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={handleBackClick}
          className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-900 font-bold px-6 py-2 rounded-md"
        >
           Back
        </button>
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Educational Resources</h2>
        <div className="search-filter flex items-center justify-between mb-6">
          <div className="search-bar flex-1 mr-4">
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
              <option value="Marine Life">Marine Life</option>
              <option value="Conservation">Conservation</option>
              <option value="Pollution">Pollution</option>
            </select>
          </div>
        </div>
        {error ? (
          <p className="text-center text-red-500">Error fetching resources: {error}</p>
        ) : (
          <>
            <div className="tips bg-gray-100 p-4 rounded-lg mb-6">
              <p>Tip: Use the filters above to find resources on Marine Life, Conservation, Pollution, and more.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                  <div key={resource._id} className="resource-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="card-inner p-4">
                      <div className="thumbnail-container relative">
                        {resource.type === 'video' && (
                          <div className="video-container">
                            <a
                              href={resource.content}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full h-full relative"
                            >
                              <img src={resource.thumbnail} alt={resource.title} className="thumbnail" />
                              <FaPlayCircle
                                className="play-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
                              />
                            </a>
                            <div className="video-details text-left mt-4">
                              <h3 className="text-xl font-bold text-blue-800">{resource.title}</h3>
                              <p className="text-gray-600">{resource.description}</p>
                            </div>
                          </div>
                        )}
                        {resource.type === 'article' && (
                          <div className="article-container text-center">
                            <FaBook className="icon article-icon text-4xl text-blue-800 mb-2 mx-auto" />
                            <h3 className="text-xl font-bold text-blue-800">{resource.title}</h3>
                            <p className="text-gray-600">{resource.description}</p>
                          </div>
                        )}
                        {resource.type === 'quiz' && (
                          <div className="quiz-container text-center">
                            <FaQuestionCircle className="icon quiz-icon text-4xl text-blue-800 mb-2 mx-auto" />
                            <h3 className="text-xl font-bold text-blue-800">{resource.title}</h3>
                            <p className="text-gray-600">{resource.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No resources found for the selected category.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Education;
