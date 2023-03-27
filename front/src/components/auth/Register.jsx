import React, { useState } from 'react';

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            if (response.ok) {
                // Successful login, redirect to dashboard or homepage
                window.location.href = '/';
            } else {
                // Login failed, display error message
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('An error occurred while logging in. Please try again later.');
        }
    };
    return (
        <div className='h-screen w-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 duration-100'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-0 max-[1024px]:px-28 max-[600px]:px-6">
                <div className="">
                    <div className='absolute z-0 top-48 left-28 w-60 h-60 opacity-50 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob'></div>
                    <div className='absolute z-0 top-0 right-28 w-60 h-60 opacity-50 bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-2000'></div>
                    <div className='absolute z-0 -bottom-24 left-24 w-60 h-60 opacity-50 bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-4000' ></div>
                    <div className='absolute z-0 bottom-48 right-48 w-60 h-60 opacity-50 bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-4000' ></div>
                </div>
                <div className="w-full p-6 m-auto bg-white dark:bg-slate-700 rounded-md shadow-xl shadow-sky-400/30 ring ring-2 ring-sky-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase dark:text-white">
                        Sign up
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={lastName} onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-sky-600 dark:text-sky-400 hover:underline"
                        >
                            Forgot Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide  text-white transition-colors duration-200 transform bg-sky-700 dark:bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-white">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
