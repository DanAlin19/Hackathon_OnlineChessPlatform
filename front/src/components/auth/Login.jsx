import React from 'react';

export default function Login() {
    return (
        <div className='h-screen w-screen dark:bg-slate-800 duration-100 bg-white'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-0 max-[600px]:px-3">
                <div className="w-full p-6 m-auto bg-white dark:bg-slate-700 rounded-md shadow-xl shadow-sky-400/30 ring ring-2 ring-sky-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase dark:text-white">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                                Login
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
