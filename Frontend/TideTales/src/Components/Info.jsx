import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import './info.css'; // Ensure this file exists

function Info() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?t=st=1717775858~exp=1717779458~hmac=c08a35dfcfcd8dba8c4c90686cf00cf1e1cfb358cc81a6878bb9f2852e262c4f&w=996')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-8">
        <button
          onClick={handleBackClick}
          className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-500 font-bold px-6 py-2 rounded-md"
        >
           Back
        </button>
        <div className="max-w-4xl mx-auto text-black mb-8 font-bold text-xl flex flex-col items-center">
          <div className="text-container rounded-lg shadow-lg p-8 bg-white bg-opacity-75 mb-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
              Exploring Oceanic Realms
            </h1>
            <div className="mb-8">
              <p className="mb-4 text-lg">
                The dashboard serves as an invaluable repository of knowledge, offering a comprehensive
                understanding of the intricate ecosystems that constitute our planet's oceans.
              </p>
              <ul className="mb-4 list-disc list-inside text-lg">
                <li>
                  The bustling coral reefs of the Caribbean and the icy depths of the Arctic unveil a
                  diverse tapestry of life.
                </li>
                <li>
                  Planktons form the foundation of marine food webs, while nektons traverse the ocean's
                  vast expanse.
                </li>
                <li>
                  Benthic organisms play a crucial role in nutrient cycling and sediment dynamics.
                </li>
                <li>
                  Coral reefs provide critical habitat, while marine plants contribute to oxygen
                  production.
                </li>
                <li>
                  Charismatic megafauna like dolphins, sharks, and sea turtles inhabit the oceans.
                </li>
                <li>
                  Marine invertebrates, from nudibranchs to cephalopods, showcase incredible
                  adaptability.
                </li>
                <li>
                  Enigmatic deep-sea creatures survive in extreme pressures and darkness of the ocean's
                  depths.
                </li>
              </ul>
              <p className="mb-4 text-lg">
                As stewards of the ocean, it is incumbent upon us to utilize these dashboards to inform
                our conservation efforts and ensure the health and vitality of marine ecosystems for
                generations to come.
              </p>
            </div>
          </div>
          <Link
            to="/piechart"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            View Report
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
