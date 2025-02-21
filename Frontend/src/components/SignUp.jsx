import { Link } from "react-router-dom"


const SignUp = ()=> {
    return (

    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-2/5 bg-primary text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Fill up personal information and start journey with us.</p>
                        <Link to="" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-primary" >
                            Sign Up
                        </Link>
                </div>


                <div className="w-3/5 p-5">
                   <div className="text-center font-semibold">
                       <span className="text-primary mr-4 ">Macky`s</span>Meeting
                   </div>
                   <div className="py-10">
                        <h2 className="text-3xl font-bold text-primary mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-primary inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                            <Link to="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                              <button className="text-2xl"><i className="fa-brands fa-google"></i></button>
                            </Link>
                            <Link to="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                              <button className="text-2xl"><i className="fa-brands fa-facebook "></i></button>
                            </Link>
                            <Link to="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                              <button className="text-2xl"><i className="fa-brands fa-x-twitter"></i></button>
                            </Link>
                            <Link to="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                              <button className="text-2xl"><i className="fa-brands fa-linkedin"></i></button>
                            </Link>
                        </div>
                        <div>
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <div className="flex flex-col items-center ">
                                <div className="bg-gray-100 w-[400px] p-2 flex items-center mb-3">
                                    <button className="test-gray-400 m-2">
                                    <i className="fa-regular fa-envelope"></i>
                                    </button>
                                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="bg-gray-100 w-[400px] p-2 flex items-center mb-3">
                                    <button className="test-gray-400 m-2">
                                    <i className="fa-solid fa-lock"></i>
                                    </button>
                                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="bg-gray-100 w-[400px] p-2 flex items-center">
                                    <button className="test-gray-400 m-2">
                                    <i className="fa-solid fa-phone"></i>
                                    </button>
                                    <input type="number" name="number" placeholder="Phone Number" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                            </div>

                            <div className="flex justify-center mt-5">
                                <label className="flex items-center text-xs font-medium"><input type="checkbox" name="remember" className="mr-1"/>I agree to the Terms of Service and Privacy Policy</label>
                            </div>
                            <div className="mt-3">
                                <Link to="/UserSignIn" className="border-2 border-primary rounded-full px-12 py-2 inline-block font-semibold hover:bg-primary hover:text-white" >
                                   Sign In
                                </Link>
                            </div>
                            
                        </div>
                   </div>
                </div>
                
               
            </div>
        </div>
    </section>
    )
}

export default SignUp