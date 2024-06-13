import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Dashboard.css';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Dashboard = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source
          src="https://v7.cdnpk.net/videvo_files/video/partners1366/large_preview/hd440fdba_00000307DJI_0000.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Link to="/" className="absolute top-10 left-6 text-white hover:text-blue-700 z-10 bg-blue-400 font-bold px-6 py-2 rounded-md">
        <i className="fas fa-chevron-left"></i> Back
      </Link>

      <main className="max-w-7xl mx-auto mt-20 px-6 relative z-10">
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Marine Life Stories", description: "Read about fascinating marine creatures and their habitats.", link: "/marine", buttonText: "Explore" },
              { title: "Ocean Conservation", description: "Learn about efforts to preserve our oceans and marine biodiversity.", link: "/ocean-conservation", buttonText: "Discover" },
              { title: "Events", description: "Stay updated with the latest events in the marine world.", link: "/events", buttonText: "Check Now" },
              { title: "News", description: "Stay updated with the latest news in the marine world.", link: "/news", buttonText: "Check Now" },
    
              { title: "Educational Resources", description: "Explore educational content and resources on marine biology and ecology.", link: "/education", buttonText: "Learn More" },
              { title: "Analytics Hub", description: "Explore reports on various species based on their location.", link: "/info", buttonText: "Learn More" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  {item.description}
                </p>
                <Link to={item.link}>
                  <button className="btn">{item.buttonText}</button>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
