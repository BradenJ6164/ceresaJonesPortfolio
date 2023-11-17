import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export function Header() {
    // const [state, setState] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position
            const scrollY = window.scrollY;
            // Set a threshold value to determine if the page has scrolled
            const threshold = 10;
            setHasScrolled(scrollY > threshold);
        };

        // Add event listener to monitor scroll position
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>

        <header
            className={`fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-primary text-sm py-4 dark:bg-gray-800 ${hasScrolled ? 'shadow' : ''}`}>
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                 aria-label="Global">
                <div className="flex items-center justify-between">
                    <NavLink className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" to="/">
                        <img alt="logo" className="w-10 h-auto" src="./ceresaLogo.png"/>
                        <p className="text-white whitespace-nowrap h-auto">
                            Ceresa Jones
                        </p>
                    </NavLink>
                    <div className="sm:hidden">
                        <button type="button"
                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1"
                                aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16"
                                 fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-image-and-text-1"
                     className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div
                        className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <NavLink to="/" className={({isActive}) => {
                            return (isActive ? ' font-bold text-white ' :
                                'text-gray-300 dark:text-white') + "hover:text-gray-900 dark:hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        }}>
                            Home
                        </NavLink>
                        <NavLink to="/works" className={({isActive}) => {
                            return (isActive ? 'font-bold text-white ' :
                                'text-gray-300 dark:text-white') + "hover:text-gray-900 dark:hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        }}>
                            Works
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>


    </>)
}

export default Header;
