import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function LoginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
    
        const data = await response.json()
    
        console.log(data);
          
        if(data.token) { 
            console.log(data)
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("id", data.id);
          setErrorMessage("");
          window.location.pathname = '/';
        } else {
          document.getElementById('eroare_div').style.display = 'block';
          setErrorMessage(data.message);
        }
    
      }

    return (
        <div className='w-full bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 duration-100 shadow z-50'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-0 max-[1024px]:px-28 max-[600px]:px-6">
                <div className="w-full p-6 m-auto bg-white dark:bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black uppercase dark:text-black">
                        Sign in
                    </h1>
                    <form className="mt-6" onSubmit={LoginUser}>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-black dark:bg-white dark:text-white bg-white border rounded-md focus:border-orange-200 focus:ring-orange-200 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800 dark:text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-black dark:bg-white dark:text-white bg-white border rounded-md focus:border-orange-200 focus:ring-orange-200 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-black dark:text-black hover:underline"
                        >
                            Forgot Password?
                        </a>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide  text-white transition-colors duration-200 transform bg-orange-700 dark:bg-gradient-to-r dark:from-stone-800 dark:to-stone-900 focus:outline-none focus:bg-orange-800">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700 dark:gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-black dark:text-black hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
