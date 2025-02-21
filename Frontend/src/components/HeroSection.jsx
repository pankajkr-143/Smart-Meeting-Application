// import React from 'react'
 import { Link } from "react-router-dom"
import Navbar from "./Navbar"


const HeroSection = ()=> {
  return (
  <Navbar>
    <section className="h-[92vh] w-[100%] grid grid-cols-2 items-center p-6">
      <div className="">
          <h1 className="text-6xl font-semibold font-display leading-snug">Free online meeting platform you can rely on</h1>
          <p className="text-xl tracking-wide ">Macky`s Meeting free online meeting platform allows you to hold online meetings with real-time 
            audio,video,Chat and screen sharing at zero cost. Initiate or join free video conferencing meeting 
            from anywhere, and collaborate effectively with moderator controls.
          </p>
          <button 
            className="px-6 py-3 font-bold text-white bg-primary rounded-lg mr-4 mt-6">
              <Link to="/SignUp">
                 TRY IT FOR FREE
              </Link>
          </button>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white shadow p-5 rounded-lg rounded-tl-[90px] rounded-br-[90px] w-full cursor-pointer ">
        <img src="./images/a.jpg" className="shadow-md rounded-lg rounded-tl-[90px] object-cover"/>
        <img src="./images/b.jpg" className="shadow-md rounded-lg  object-cover"/>
        <img src="./images/c.jpg" className="shadow-md rounded-lg  object-cover"/>
        <img src="./images/d.jpg" className="shadow-md rounded-lg rounded-br-[90px] object-cover"/>
      </div>

    </section>

  </Navbar>
    
       
    
  
  )
}

export default HeroSection
