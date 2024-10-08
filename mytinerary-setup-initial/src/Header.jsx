import React, { useState, useEffect } from 'react';
import video from './assets/videos.mp4';

function Header() {
    return (
        <>
            <header className="text-center bg-black py-4 h-screen relative">
                <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 mt-28">
                    <h1 className="hidden lg:block">
                        <span className="text-blue-500 mb-3 block">
                            <a href="#">
                                <img 
                                    src="http://127.0.0.1:5502/images/logo.png" 
                                    alt="logo" 
                                    className="mx-auto w-48" 
                                />
                            </a>
                        </span>
                        <span className="text-white text-xl">MY TINERARY</span>
                    </h1>
                </div>
            </header>
            <Navbar />
        </>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 p-4 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} shadow-md z-10`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 flex justify-center items-center space-x-4 hidden lg:flex">
                    <a className="text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-poppins text-lg no-underline py-2 px-3 rounded" href="#">Home</a>
                    <a className="text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-poppins text-lg no-underline py-2 px-3 rounded" href="#">Cities</a>
                    <div className="flex items-center">
                        <a 
                            title="Login" 
                            className="flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 border-2 border-transparent rounded-full px-4 py-2 font-medium text-lg"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                            </svg>
                            Login
                        </a>
                    </div>
                </div>
                <button 
                    className="lg:hidden p-2 text-gray-600 ml-auto" 
                    aria-label="Toggle navigation" 
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div 
                className={`fixed top-0 right-0 h-full bg-gray-100 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}
                style={{ width: '200px', overflow: 'hidden' }} // Ancho reducido
            >
                <div className="flex flex-col items-start p-4">
                    <button className="self-end p-2 text-gray-600" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <a className="text-gray-900 hover:bg-white hover:text-gray-800 py-2 transition-colors duration-300 font-poppins text-lg no-underline px-3 rounded" href="#">Home</a>
                    <a className="text-gray-900 hover:bg-white hover:text-gray-800 py-2 transition-colors duration-300 font-poppins text-lg no-underline px-3 rounded" href="#">Cities</a>
                    <div className="flex items-center">
                        <a 
                            title="Login" 
                            className="flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 border-2 border-transparent rounded-full px-4 py-2 font-medium text-lg"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                            </svg>
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export { Header };