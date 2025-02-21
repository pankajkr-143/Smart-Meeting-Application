
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"

const UserSignIn = ()=> {
    const [meetNow, setMeetNow] = useState(false)
    return (
        <Navbar>
            <main>
            <div className="flex">
                    <aside className="h-[92vh] w-[120px] shadow-4xl">
                        <div className="flex flex-col items-center space-y-2">
                            <Link to="/ClickHomeIcon" className="flex flex-col items-center mt-2">
                                <button className="text-6xl">
                                <i className="fa-solid fa-house"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Home</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                <i className="ri-video-on-line"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Meetings</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                <i className="fa-solid fa-tv"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Webinars</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Calendar</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                    <i className="ri-tv-line"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Rooms</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                <i className="fa-regular fa-folder-open"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Files</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                    <i className="fa-regular fa-user"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">User</p>
                            </Link>
                            <Link to="" className="flex flex-col items-center">
                                <button className="text-6xl">
                                    <i className="fa-solid fa-gear"></i>
                                </button>
                                <p className="text-gray-600 font-semibold">Setting</p>
                            </Link>
                        </div>
                    </aside>

                <div className="relative bg-slate-100 w-full h-[92vh] flex justify-around">
                        <div className="w-[550px] h-[250px] bg-white mt-[60px] shadow-xl rounded">
                            <div className="flex flex-col m-8">
                                <h1 className="text-xl font-bold mb-2">Meeting</h1>
                                <p className="text-gray-600 ">Create a meeting, invite participants, and interact through screen sharing and audio/video conferencing.</p>
                                <div className="relative mt-[70px] ml-[170px] flex gap-5">
                                   <button className="border-2 border-primary rounded-full px-8 py-1 inline-block font-semibold hover:bg-primary hover:text-white" onClick={()=>setMeetNow(!meetNow)}>Meet Now</button>
                                   <button className="border-2 border-primary rounded-full px-8 py-1 inline-block font-semibold hover:bg-primary hover:text-white">Schedule</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[550px] h-[250px] bg-white mt-[60px] shadow-xl rounded">
                            <div className="flex flex-col m-8">
                                    <h1 className="text-xl font-bold mb-2">Webinar</h1>
                                    <p className="text-gray-600 ">Organize a webinar, invite your audience to register, and engage with attendes by sharing your screen.</p>
                                    <div className="mt-[70px] ml-[150px] flex gap-5">
                                    <button className=" border-2 border-primary rounded-full px-8 py-1 inline-block font-semibold hover:bg-primary hover:text-white">Broadcast Now</button>
                                    <button className="border-2 border-primary rounded-full px-8 py-1 inline-block font-semibold hover:bg-primary hover:text-white">Schedule</button>
                                    </div>
                                    
                                </div>
                        </div>
                </div>
              

            </div>
            <div className="">
                <div className="absolute top-[500px] left-[160px] bg-red-600 w-[380px] h-[250px] rounded shadow=xl"> 

                </div>
                <div className="absolute top-[500px] left-[580px] bg-green-600 w-[380px] h-[250px] rounded shadow-xl"> 

                </div>
                <div className="absolute top-[500px] left-[1000px] bg-blue-600 w-[380px] h-[250px] rounded shadow-xl"> 

                </div>
            </div>
            </main>

            {
                meetNow && 
                <div className="absolute bg-white top-[360px] left-[380px] shadow-xl border border-2 border-primary rounded-xl">
                    <button className="flex justify-center items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                        <i className="fa-solid fa-phone"></i>
                        <p className="text-md font-semibold">Audio Conferencing</p>
                    </button>
                    <button className="flex justify-center items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                        <i className="ri-video-on-line"></i>
                        <p className="text-md font-semibold">Video Conferencing</p>
                    </button>
                </div>
            }

            
        </Navbar>
    )
}
export default UserSignIn