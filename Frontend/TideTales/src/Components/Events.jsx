import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import './Events.css'; // Import your CSS file for styling

const Events = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getallevents'); // Adjust the URL as per your backend setup
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const textVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.1, rotate: 2, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)", transition: { yoyo: 5, duration: 0.3 } }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="events-page">
            <button
                onClick={handleBackClick}
                className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-500 font-bold px-6 py-2 rounded-md"
            >
                 Back
            </button>
            <div className="events-container">
                <motion.h1 className="events-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    Events
                </motion.h1>
                <div className="events-list">
                    {events.map((event, index) => (
                        <motion.div
                            key={event._id}
                            className="event-card"
                            variants={cardVariant}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="event-card-inner"
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.3, staggerChildren: 0.1 }}
                            >
                                <motion.h2 className="event-name" variants={textVariant}>
                                    {event.event_name}
                                </motion.h2>
                                <motion.p className="event-location" variants={textVariant}>
                                    <strong>Location:</strong> {event.location}
                                </motion.p>
                                <motion.p className="event-dates" variants={textVariant}>
                                    <strong>Dates:</strong> {new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}
                                </motion.p>
                                <motion.p className="event-description" variants={textVariant}>
                                    {event.description}
                                </motion.p>
                                <motion.a href={event.website} className="event-website" target="_blank" rel="noopener noreferrer" variants={textVariant}>
                                    Website
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
