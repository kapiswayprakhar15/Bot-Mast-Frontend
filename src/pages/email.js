import React, { useState  , useEffect} from "react";
import logo from '../assets/logo.svg'
import '../container/style/login.css'
import { Carousel } from '../container/components/carousel'
import slides from "../data/carouselData.json";
import Validation from '../container/store/Validation'


const Login = () => {

    const [formData , setFormData] = useState({
        email : '' ,
        password :''  
    })

    const [errors , setErrors ] = useState({})

    const handleChange = (e) =>{    
        const {name , value } = e.target ;
        setFormData({
            ...formData , [name] : value 
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(formData));
    }

    return (

        <div className="w-full h-screen flex flex-row-reverse items-start">
            <div className="relative w-1/2 h-full flex flex-col ">
                <Carousel data={slides.slides} />
            </div>
            <div className='w-1/2 h-full  bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <img className="mr-[24rem]" src={logo} />
                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2 '>
                        <h3 className='login font-Raleway'>Login</h3>
                        <p className=' text-[20px] font-normal text-[#686767] mb-10 font-Raleway'>See your growth and get management support. </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label for="default-input" class="block mb-2 text-sm font-normal text-[18px] text-[#6c6c6c]">Username</label>
                            <input type="email" onChange={handleChange} placeholder='Enter your email address... ' id="default-input" class="bg-[#f0f0f0] border border-gray-400 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div class="mb-6">
                            <label for="default-input" class="block mb-2 text-sm font-normal text-[18px] text-[#6c6c6c]">Password</label>
                            <input type="password" onChange={handleChange} placeholder='Enter your password...' id="default-input" class="bg-[#f0f0f0] border border-gray-400 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-full flex items-center'>
                                <input type='checkbox' className='w-4 h-4 mr-2  ' />
                                <p className='text-sm'>Remember me for 30 days</p>
                            </div>
                            <p className='text-sm font-medium whitespace-nowrap cursor-pointer'>Forget password?</p>
                        </div>
                        <button className=' text-[16x] w-full text-[white]  font-Raleway my-2 mt-4 bg-[#9ea1c0] border border-[#4b4b4b4d] font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                            Login
                        </button>
                        <button className='text-[16x] w-full text-[#3c3c3c]  font-Raleway my-2 bg-[#edededb9] border border-[#4b4b4b4d] font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                            Back to Login
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login