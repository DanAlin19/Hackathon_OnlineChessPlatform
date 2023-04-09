import { useState } from "react";
import DarkTheme from "../dark_theme/DarkTheme";
import Logo from "../../assets/logo2.png"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    var TokenUser = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        window.location.reload();
    };

    return (
        <nav className="w-full bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 duration-100 shadow z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                        <a href="/">
                            <img src={Logo} alt="Logo" className="w-30 h-10" />
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-lg outline-non"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-slate-700 dark:text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-slate-700 dark:text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <li className="hover:text-black dark:text-white text-slate-700">
                                <a href="/">Home</a>
                            </li>
                            <li className="hover:text-black dark:text-white text-slate-700">
                                <a href="/profile">Profile</a>
                            </li>
                            <li className="hover:text-black dark:text-white text-slate-700">
                                <a href="/">About US</a>
                            </li>
                            <li className="hover:text-black dark:text-white text-slate-700">
                                <a href ="#contact-us">Contact US</a>
                            </li>
                            {navbar ? <li>
                                <DarkTheme />
                            </li> : null}
                        </ul>
                        {!TokenUser ?

                            <div className="mt-3 space-y-2 lg:hidden lg:inline-block">
                                <a
                                    href="/login"
                                    className="inline-block w-full px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="/register"
                                    className="inline-block w-full px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
                                >
                                    Sign up
                                </a>
                            </div>

                            :

                            <div className="mt-3 space-y-2 lg:hidden lg:inline-block">
                                <button
                                    onClick={handleLogout}
                                    className="inline-block w-full px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
                                >
                                    Log out
                                </button>
                            </div>

                        }

                    </div>
                </div>
                {!TokenUser ?

                    <div className="hidden space-x-2 lg:inline-block">
                        <a
                            href="/login"
                            className="px-4 py-2 text-black bg-orange-100 dark:bg-white rounded-lg shadow hover:bg-white"
                        >
                            Sign in
                        </a>
                        <a
                            href="/register"
                            className="px-4 py-2 text-black bg-orange-100 dark:bg-white rounded-lg shadow hover:bg-white"
                        >
                            Sign up
                        </a>
                    </div>

                    :

                    <div className="hidden space-x-2 lg:inline-block">
                        <button
                            onClick={handleLogout}
                            className="inline-block w-full px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
                            >
                            Log out
                        </button>
                    </div>

                }

                <div className="hidden lg:flex">
                    <DarkTheme />
                </div>
            </div>
        </nav>
    );
}