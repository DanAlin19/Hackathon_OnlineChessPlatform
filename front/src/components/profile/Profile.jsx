import {React, useState, useEffect} from 'react'

export default function Profile(){

const [userProfile, setUserProfile] = useState(null);
const userId = localStorage.getItem("id");
console.log(userId)
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log(`http://localhost:5000/api/v1/user/${userId}`)
                const response = await fetch(`http://localhost:5000/api/v1/user/${userId}`);
                const data = await response.json();
                console.log(data);
                setUserProfile(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserProfile();
    }, [userId]);

    const src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"

    return <div className='h-screen w-full duration-100 flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800'>
        <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center max-w-md"
        >
            <div className='relative'>
                <div className='activeStatus h-4 w-4 bg-green-500 absolute top-1 right-1 rounded-full ring-white ring-4'></div>
                <img src={src} alt="avatar" className="h-24 ring-2 ring-offset-2 rounded-full" />
            </div>
            <div id="title" className='font-semibold text-xl mt-2'></div>
            <div id="subtitle" className='text-sm text-gray-500'></div>

            <div className="stats flex justify-between items-center my-6 text-sm">
                <div className='stat-sub flex flex-col items-center font-semibold mr-4'>
                    <div className='stat-num text-stone-500 font-bold text-md'>172</div>
                    <div className='stat-type text-black text-xs'>POINTS</div>
                </div>
                <div className='stat-sub flex flex-col items-center font-semibold mr-4'>
                    <div className='stat-num text-stone-500 font-bold text-md'>3.2k</div>
                    <div className='stat-type text-black text-xs'>WINS</div>
                </div>
                <div className='stat-sub flex flex-col items-center font-semibold'>
                    <div className='stat-num text-stone-500 font-bold text-md'>27</div>
                    <div className='stat-type text-black text-xs'>FOLLOWERS</div>
                </div>


            </div>
            <div className="actions mt-4 flex justify-center items-center">
                <div><button className="follow focus:ring-2 ring-offset-2 mr-4 bg-orange-300 dark:bg-stone-400 text-white p-2 px-4 rounded-md">FOLLOW</button></div>
                <div><button className='msg focus:ring-2 ring-offset-2 ring-pink-300 bg-orange-300 dark:bg-stone-400 text-white p-2 px-4 rounded-md'>MESSAGE</button></div>
            </div>
        </div>
    </div>
}

