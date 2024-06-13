import React from 'react';
import './LandingPage.css';
import { useAuth0 } from "@auth0/auth0-react";

const logo = "https://i.postimg.cc/6qym64C3/water.png";

// const LoginIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
// );

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      <div
        onClick={() => loginWithRedirect()}
        className="cursor-pointer text-black text-sm rounded flex items-center hover:bg-blue-500 transition duration-300 ease-in-out p-1 font-bold"
      >
        {/* <LoginIcon /> */}
        <span className="ml-2">Log In</span>
      </div>
    );
};

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="cursor-pointer text-black text-sm rounded flex items-center hover:bg-blue-500 transition duration-300 ease-in-out p-1 font-bold"
      >
        Log Out
      </button>
    );
};

export default function LandingPage() {
    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-200 to-blue-800 shadow-xl">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-2">
                            {/* Logo */}
                            <img src={logo} alt="TideTales Logo" className="h-14" />
                            
                            {/* TideTales Text */}
                            <a href="#" className=" heading font-extrabold text-4xl text-blue-900 rounded-lg py-1 px-2">TideTales</a>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="nav-item">
                                <a href="/about" className="text-black px-3 py-2 bg-white rounded-lg hover:text-blue-500 text-sm font-bold">About</a>
                            </div>
                            <div className="nav-item">
                                <a href="/contact" className="text-black px-3 py-2 bg-white rounded-lg hover:text-blue-500 text-sm font-bold">Contact</a>
                            </div>
                            <div className="text-black px-2 py-1 bg-white rounded-lg hover:text-gray-200 text-sm">
                                <LoginButton />
                            </div>
                            <div className="text-black px-2 py-1 bg-white rounded-lg hover:text-gray-200 text-sm">
                                <LogoutButton />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section with Background Video */}
            <section className="hero-section relative">
                <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                    <source src="https://assets.mixkit.co/videos/44972/44972-720.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                    <div className="text-white">
                        <h1 className="title text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Welcome to TideTales</h1>
                        <p className="text-lg md:text-xl mb-8 animate-slide-in">Explore the wonders of the ocean with TideTales</p>
                        <a href="/dashboard" className="get-started-button text-white font-bold py-3 px-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-12">
                <section className="py-12">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Discover the beauty of marine life</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">TideTales brings you closer to the wonders of the sea through captivating stories and stunning visuals.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">Marine Life Stories</h3>
                            <p className="text-gray-700 text-center">Read about fascinating marine creatures and their habitats.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">Ocean Conservation</h3>
                            <p className="text-gray-700 text-center">Learn about efforts to preserve our oceans and marine biodiversity.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">Educational Resources</h3>
                            <p className="text-gray-700 text-center">Explore educational content and resources on marine biology and ecology.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-200 to-blue-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-4">
                        <a href="#" className="font-bold text-2xl text-white">TideTales</a>
                    </div>
                    <div className="space-x-4">
                        <a href="/about" className="text-white hover:text-gray-200">About</a>
                        <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
                        <a href="/privacy" className="text-white hover:text-gray-200">Privacy Policy</a>
                    </div>
                    <p className="mt-4">&copy; 2024 TideTales. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
