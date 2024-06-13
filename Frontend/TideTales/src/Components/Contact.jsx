import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-us-container">
      {/* Video Background */}
      <video autoPlay muted loop id="background-video" className="fixed top-0 left-0 min-w-full min-h-full z-0">
        <source src="https://assets.mixkit.co/videos/47402/47402-720.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="container mx-auto my-10 p-6 rounded-lg shadow-lg relative z-10 max-w-md bg-transparent-overlay">
        {/* Back Button */}
        <Link to="/" className="absolute top-6 left-6 z-20 text-blue-900 hover:text-blue-700 bg-blue-500 px-4 py-1 rounded-lg">
          <i className="fas fa-chevron-left"></i> Back
        </Link>

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Contact Us</h2>
        <p className="text-center text-gray-700 mb-4">We'd love to hear from you! Please fill out the form below to get in touch.</p>

        <form className="mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <div className="flex justify-center">
            {/* Social media icons */}
            <a href="#" className="text-blue-500 mx-2"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-blue-500 mx-2"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-blue-500 mx-2"><i className="fab fa-instagram fa-lg"></i></a>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
