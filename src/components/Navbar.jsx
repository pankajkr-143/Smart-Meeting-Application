// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({children})=> {
  const [navMenu, setNavMenu] = useState(false)
  const [features, setFeatures] = useState(false)
  const [resources, setResources] = useState(false)
  const [pricing, setPricing] = useState(false)
  return (
    <section>

          {/* -------NAVBAR------ */}
        <nav className="p-3 bg-white flex justify-between items-center shadow-md">
            <Link to="" className='text-lg font-semibold font-display ml-8 border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600'>Mickey`s Meeting</Link>
            <div className="relative hidden md:flex gap-12 mr-8">
                <button className='flex gap-2 items-center'onClick={()=>setFeatures(!features)}>
                    <Link to="" className="font-medium hover:text-primary" >Feature </Link>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                <button className='flex gap-2 items-center'onClick={()=>setPricing(!pricing)}>
                    <Link to="" className="font-medium hover:text-primary" >Pricing</Link>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                <Link to="" className="font-medium hover:text-primary">Macky</Link>
                <Link to="" className="font-medium hover:text-primary">Customers</Link>
                <button className='flex gap-2 items-center'onClick={()=>setResources(!resources)}>
                    <Link to="" className="font-medium hover:text-primary">Resources</Link>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                <Link to="/Contact-Us" className="font-medium hover:text-primary">Contact Us</Link>
            </div>
          {/* MOBILE VIEW FOR NAVBAR MENU DESIGING */}
            <button className='p-2 md:hidden'>
              <i className="fa-solid fa-bars text-gray-600" onClick={()=>setNavMenu(!navMenu)}></i>
              {

                navMenu && 
                <div className="fixed w-[280px] bg-gray-300 top-0 left-0 h-screen">
                      <div className='mt-2 p-1 shadow'>
                          <Link to="" className="text-lg font-semibold font-display">Mickey`s Meeting</Link>
                      </div>
                        <div className="md:hidden flex flex-col mt-6">
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Feature</Link>
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Pricing</Link>
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Solutions</Link>
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Customers</Link>
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Resources</Link>
                                <Link to="" className="font-medium hover:text-primary p-3 m-3 hover:bg-gray-50 rounded-lg">Contact Us</Link>
                        </div>
                </div>
              }
            </button>

        </nav>
          
          <div>
            {children}
          </div>

        {/* FEATURES DROPDOWN MENU */}

        {
          features && 
          <div className="absolute w-[280px] bg-white border shadow top-12 ml-[500px] ">
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Online Meetings</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Video Webinars</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Meeting Rooms</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Screen Sharing</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Session Recording</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Personal Room</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Breakout Rooms</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Transcription</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Customization</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Collaboration</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">UCaas</Link>
              <Link to="" className=" block font-medium hover:text-primary p-2 m-3 hover:bg-gray-50 rounded-lg">Security</Link>
          </div>
        }


        {/* RESOURCES DROPDOWN MENU */}

        {
          resources &&
          <div className="absolute w-[280px] bg-white border shadow top-12 right-0 mr-[220px] flex flex-col">
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">User Guide</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Developer Guide</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Free Training</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Request Demo</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Blogs</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">FAQs</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Awards</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">What`s New</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">User Community</Link>
              <Link to="" className="font-medium hover:text-primary p-3 ml-3 hover:bg-gray-50 rounded-lg">Contact Us</Link>
          </div>
        }
        
      {/* DROPDOWN MENU FOR PRICING */}

      {
        pricing &&
        <div className="absolute w-[400px] bg-white border shadow top-12 ml-[500px] grid grid-cols-2">
              
            <div className='flex flex-col'>
                <Link to="" className="text-blue-600 font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">By Industry</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Education</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Healthcare</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Government</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Retail</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Banking</Link>
                <Link to="" className="text-blue-600 font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">By Size</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Freelancers</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Startups</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Small Business</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Enterprise</Link>
            </div>
            <div className='flex flex-col'>
                <Link to="" className="text-blue-600 font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Use Cases</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Remote Work</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">HybridmWork</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Team Meeting</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Remote Meeting </Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Video Interview</Link>
                <Link to="" className="text-blue-600 font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">By Device</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Desktop</Link>
                <Link to="" className="font-medium hover:text-primary p-2 ml-3 hover:bg-gray-50 rounded-lg">Mobile</Link>
            </div>
      
        </div>
      } 
         
    </section>
     




  )
}

export default Navbar
