import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <header className="h-24 bg-gray-100 shadow-sm relative z-50">
            <div className="max-w-6xl mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo principal */}
                    <div className={`w-44 relative z-1 ${isMenuOpen ? 'md:block hidden' : 'block'}`}>
                        <img
                            src="/logoMartin.png"
                            alt="Logo"
                            className="w-full"
                        />
                    </div>

                    {/* Navigation Menu */}
                    <nav
                        className={`
                            fixed md:relative top-0 right-0 h-full w-72 md:w-auto
                            bg-white md:bg-transparent shadow-lg md:shadow-none
                            transform transition-transform duration-300 ease-in-out
                            ${isMenuOpen ? 'translate-x-0 z-10' : 'translate-x-full'} 
                            md:translate-x-0 md:transition-none
                        `}
                    >
                        {/* Botón cerrar (posición absoluta) */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-6 right-6 p-2 focus:outline-none md:hidden"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className="w-full h-0.5 bg-black transition-all duration-300 rotate-45 translate-y-2" />
                                <span className="w-full h-0.5 bg-black transition-all duration-300 opacity-0" />
                                <span className="w-full h-0.5 bg-black transition-all duration-300 -rotate-45 -translate-y-2" />
                            </div>
                        </button>

                        {/* Contenedor logo y menú */}
                        <div className="flex flex-col items-center w-full">
                            {/* Logo en menú móvil */}
                            {isMenuOpen && (
                                <div className="w-44 md:hidden mt-16 mb-8">
                                    <img
                                        src="/logoMartin.png"
                                        alt="Logo"
                                        className="w-full"
                                    />
                                </div>
                            )}

                            <ul className={`
                                w-full px-8 md:py-0 
                                space-y-8 md:space-y-0 md:flex md:space-x-8 
                                ${isMenuOpen ? "flex flex-col items-center" : "mt-[35px]"}
                            `}>
                                <li className={`${isMenuOpen ? "hover:bg-gray-300 rounded-md w-[150px] text-center p-1" : ""}`}>
                                    <Link
                                        to="/soluciones"
                                        onClick={closeMenu}
                                        className="block text-lg md:text-base font-medium text-gray-800 hover:text-black transition-colors duration-300"
                                    >
                                        Soluciones
                                    </Link>
                                </li>
                                <li className={`${isMenuOpen ? "hover:bg-gray-300 rounded-md w-[150px] text-center p-1" : ""}`}>
                                    <Link
                                        to="/acerca-de-mi"
                                        onClick={closeMenu}
                                        className="block text-lg md:text-base font-medium text-gray-800 hover:text-black transition-colors duration-300"
                                    >
                                        Acerca de mí
                                    </Link>
                                </li>
                                <li className={`${isMenuOpen ? "hover:bg-gray-300 rounded-md w-[150px] text-center p-1" : ""}`}>
                                    <Link
                                        to="/contacto"
                                        onClick={closeMenu}
                                        className="block text-lg md:text-base font-medium text-gray-800 hover:text-black transition-colors duration-300"
                                    >
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Botón hamburguesa (solo visible cuando el menú está cerrado) */}
                    {!isMenuOpen && (
                        <button
                            onClick={toggleMenu}
                            className="relative z-50 p-2 md:hidden focus:outline-none"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className="w-full h-0.5 bg-black" />
                                <span className="w-full h-0.5 bg-black" />
                                <span className="w-full h-0.5 bg-black" />
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 md:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;