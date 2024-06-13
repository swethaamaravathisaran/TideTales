import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MarineStories.css';

const categories = [
    {
        title: 'Plankton',
        description: 'Small organisms that drift in the sea.',
        imageUrl: 'https://media.istockphoto.com/id/1435905250/vector/cartoon-jellyfish-background-ocean-deep-water-life-glowing-creatures-on-seabed-underwater.jpg?s=612x612&w=0&k=20&c=mEIEDRqJMeYaKvsVKoAnwpWNPgqF3HRJPqnSIFGiFAo=',
    },
    {
        title: 'Nekton',
        description: 'Active swimmers in the ocean.',
        imageUrl: 'https://t3.ftcdn.net/jpg/07/14/71/28/240_F_714712823_rR4kon925Ik18GtDnhTnDATHn2bXDi7F.jpg',
    },
    {
        title: 'Benthos',
        description: 'Organisms living on the sea floor.',
        imageUrl: 'https://t4.ftcdn.net/jpg/06/78/70/65/240_F_678706578_6PPWpeoGTOIFgS04ve2JdAOPQjw0ahzf.jpg',
    },
    {
        title: 'Marine Vertebrates',
        description: 'Animals with backbones in the sea.',
        imageUrl: 'https://t3.ftcdn.net/jpg/07/51/00/78/240_F_751007804_G92yEdxewCfGd7FAXAG6CxdMFta7ofcX.jpg',
    },
    {
        title: 'Marine Invertebrates',
        description: 'Sea animals without backbones.',
        imageUrl: 'https://t3.ftcdn.net/jpg/07/48/34/90/240_F_748349085_OEeVcfLWmubMH9Er7p26fywLp8U2wmsm.jpg',
    },
    {
        title: 'Deep Sea Organisms',
        description: 'Life forms found in the deep ocean.',
        imageUrl: 'https://t4.ftcdn.net/jpg/05/53/61/21/240_F_553612177_4ZBg2d7pbaRG5kXQdCaUuUcbvzBwjZsm.jpg',
    },
    {
        title: 'Coral Reefs',
        description: 'Diverse underwater ecosystems.',
        imageUrl: 'https://t3.ftcdn.net/jpg/00/85/60/08/240_F_85600888_BbVORyIkBMO4qML0UuzCw1hf7UIf5fx6.jpg',
    },
    {
        title: 'Marine Plants',
        description: 'Plants that grow in the ocean.',
        imageUrl: 'https://t4.ftcdn.net/jpg/07/14/36/17/240_F_714361765_gHDyTDAr1Dv4wfxs9u5Pw6IxHVBYpXh2.jpg',
    },
];

const Categories = () => {
    const navigate = useNavigate();

    const handleCardClick = (index) => {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach((card, idx) => {
            if (idx === index) {
                card.classList.toggle('zoom-in');
            } else {
                card.classList.remove('zoom-in');
            }
        });
    };

    const handleBackClick = () => {
        console.log("Back button clicked");
        navigate(-1);
    };

    return (
        <div className="bg-blue-50 relative min-h-screen overflow-hidden">
            <video autoPlay loop muted className="background-video">
                <source src="https://assets.mixkit.co/videos/1086/1086-720.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button
                onClick={handleBackClick}
                className="absolute top-8 left-6 text-white hover:text-white z-20 bg-blue-300 font-bold px-6 py-2 rounded-md"
            >
                <i className="fas fa-chevron-left"></i> Back
            </button>

            <header className="text-center py-6 bg-blue-900 bg-opacity-75 text-white relative z-10">
                <h1 className="text-4xl font-bold">TideTales Categories</h1>
            </header>

            <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {categories.map((category, index) => (
                    <Link
                        to={`/${category.title === 'Deep Sea Organisms' ? 'organisms' : category.title.toLowerCase().replace(' ', '-')}`}
                        key={index}
                        className="category-card-link"
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="category-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300">
                            <img src={category.imageUrl} alt={category.title} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-blue-800">{category.title}</h2>
                                <p className="text-gray-600 mt-2">{category.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </main>
        </div>
    );
};

export default Categories;
