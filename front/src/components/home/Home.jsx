import React from 'react';

export default function Home() {
    return (

        <div className='h-screen w-full dark:bg-slate-800 duration-100 bg-white items-center justify-center'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden max-[1021px]:px-5">
                <div className="">
                    <div className='absolute z-0 top-48 left-28 w-60 h-60 bg-cyan-300 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob'></div>
                    <div className='absolute z-0 top-0 right-28 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-2000'></div>
                    <div className='absolute z-0 -bottom-24 left-24 w-60 h-60 bg-sky-400 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-4000' ></div>
                    <div className='absolute z-0 bottom-48 right-48 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-2xl animate-blob animation-delay-4000' ></div>
                </div>

                <div className="w-full p-6 m-auto bg-white dark:bg-slate-700 rounded-md shadow-xl shadow-sky-400/30 ring ring-2 ring-sky-600 lg:max-w-xl z-40">

                    <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase dark:text-white z-40">
                        Sign in
                    </h1>
                    <form className="mt-6 z-40">
                        <div className="mb-2 z-40">
                            <label
                                for="email"
                                className="block z-40 text-sm font-semibold text-gray-800 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full z-40 px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800 dark:text-white z-40"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full z-40 px-4 py-2 mt-2 text-sky-700 dark:bg-slate-700 dark:text-white bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-sky-600 dark:text-sky-400 hover:underline"
                        >
                            Forgot Password?
                        </a>
                        <div className="mt-6 z-40">
                            <button className="w-full z-40 px-4 py-2 tracking-wide  text-white transition-colors duration-200 transform bg-sky-700 dark:bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-white z-40">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-sky-600 dark:text-sky-400 hover:underline z-40"
                        >
                            Sign up
                        </a>
                    </p>

                </div>
            </div>
        </div>

    );
}
