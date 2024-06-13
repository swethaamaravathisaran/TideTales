import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/44978/44978-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-blue-700 z-10 bg-blue-500 font-bold px-6 py-2 rounded-md">
        <i className="fas fa-chevron-left"></i> Back
      </Link>

      {/* About Us Section */}
      <section className="content-container">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="mission-statement">
          The MarineLife Explorer project is dedicated to providing an engaging and educational platform for exploring the diverse world of marine life. Through stunning photography, comprehensive species information, and interactive features, we aim to inspire appreciation and awareness of our oceans' biodiversity and the need for conservation.
        </p>
        {/* <h3 className="text-2xl font-bold text-center mb-4">Our Team</h3>
        <div className="flex justify-around"> */}
          {/* Team member 1 */}
          {/* <div className="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <div className="name">John Doe</div>
            <div className="role">Founder & CEO</div>
          </div> */}
          {/* Team member 2 */}
          {/* <div className="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <div className="name">Jane Smith</div>
            <div className="role">Lead Developer</div>
          </div> */}
          {/* Team member 3 */}
          {/* <div className="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <div className="name">David Johnson</div>
            <div className="role">Graphic Designer</div>
          </div> */}
          {/* Team member 4 */}
          {/* <div className="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 4" />
            <div className="name">Emily Brown</div>
            <div className="role">Marketing Specialist</div>
          </div> */}
    {/* /    </div> */}
      </section>
    </div>
  );
}
