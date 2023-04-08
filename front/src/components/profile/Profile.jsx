import React from 'react'

const Profile = () => {
    const src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
    
    return <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center max-w-md"
    >
        <div className='relative'>
                <div className='activeStatus h-4 w-4 bg-green-500 absolute top-1 right-1 rounded-full ring-white ring-4'></div>
            <img src={src} alt="avatar" className="h-24 ring-2 ring-offset-2 rounded-full"/>
        </div>
        <div id="title" className='font-semibold text-xl mt-2'>Nume Prenume</div>
        <div id="subtitle" className='text-sm text-gray-500'>Account Description</div>
        
        <div className="stats flex justify-between items-center my-6 text-sm">
            <div className='stat-sub flex flex-col items-center font-semibold mr-4'>
                <div className='stat-num text-indigo-500 font-bold text-md'>172</div>    
                <div className='stat-type text-indigo-400 text-xs'>POINTS</div>
            </div>
            <div className='stat-sub flex flex-col items-center font-semibold mr-4'>
                <div className='stat-num text-indigo-500 font-bold text-md'>3.2k</div>    
                <div className='stat-type text-indigo-400 text-xs'>WINS</div>
            </div>
            <div className='stat-sub flex flex-col items-center font-semibold'>
                <div className='stat-num text-indigo-500 font-bold text-md'>27</div>    
                <div className='stat-type text-indigo-400 text-xs'>FOLLOWERS</div>
            </div>
            

        </div>
        <div className="actions mt-4 flex justify-center items-center">
            <div><button className="follow focus:ring-2 ring-offset-2 mr-4 bg-indigo-500 text-white p-2 px-4 rounded-md">FOLLOW</button></div>
            <div><button className='msg focus:ring-2 ring-offset-2 ring-pink-300 bg-pink-600 text-white p-2 px-4 rounded-md'>MESSAGE</button></div>
        </div>
    </div>
}

export default Profile
