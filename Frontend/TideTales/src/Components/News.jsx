import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import './News.css'; // Import the CSS file

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="App">
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-500  px-6 py-2 text-sm font-extrabold rounded-md"
      >
        Back
      </button>
      <div className="news-heading">
        <h1>Marine News</h1>
      </div>
      <div className="news-container">
        {news.map((article, index) => (
          <div className="news-item" key={index}>
            <div className="news-content">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a className="news-link text-black text-sm font-bold bg-blue-300 px-4" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
