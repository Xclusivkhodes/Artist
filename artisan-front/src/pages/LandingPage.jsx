import Ma from '../assets/Ma.svg'
import ArtisanLink from '../assets/ArtisanLink.svg'
import { FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'
import { useState } from 'react'
import Google from '../assets/Google.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [ passwordVisible, setPasswordVisible ] = useState(false)
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className="bg-primary">
     <div className="flex">
      
      <section className="bg-secondary w-[40%] h-screen">
        <div className=" justify-center relative top-[10%]">
          <div className="flex justify-center relative">
            <img src={ ArtisanLink } alt="" className='w-[15%]'/>
            <h1 className="text-6xl font-poppins-medium text-text">
              ArtisanLink
            </h1>
            </div>
          <div/>
          <div className="flex justify-center">
            <h1 className="text-2xl font-poppins-light text-text justify-start pt-3 ">
              Welcome back to our app
            </h1>
            <a href='\' className='relative left-[8%] text-2xl font-poppins-light text-text justify-start pt-3 underline' >Register</a>
          </div>
        </div>
        <div className="flex-col flex p-[15%]">
          <label htmlFor="email" className='font-poppins-light text-text text-lg mb-1 '>Email</label>
          <input type="email" name="email" id="" className='p-4 rounded-xl text-xl' placeholder='Your Email' />
          <label htmlFor="password" className='font-poppins-light text-text text-lg mb-2 mt-5 '>Password</label>
          <input type={passwordVisible ? "text" : "password"}  name="password" id="" className='p-4 rounded-xl text-xl' placeholder='Your Password'/>
          <div className='pt-[5%]'>
            <input type="checkbox" name="remember" id="remember" className='w-4 h-4 '  />
            <label htmlFor="remember" className='font-poppins-light text-text text-lg pl-2 relative bottom-0.5 '>Remember Me</label>
        </div>
        <div>
          <Link to='/homepage'>
            <button className='border-none bg-accent shadow-2xl w-[100%] mt-5 font-poppins-light p-3.5 text-text text-xl rounded-2xl tracking-wide'>Login</button>
            <button className='border-none shadow-2xl w-[100%] mt-5 font-poppins-light p-3.5 text-xl rounded-2xl tracking-wide flex justify-center  bg-primary text-secondary'> <img src={Google} alt="" width={45} height={45} className='right-10' /> Login with Google</button>
          </Link>
        </div>
        </div>
        
      </section>
      <section className="bg-secondary opacity-50 w-[2%]">
       
      </section>
      <section>
      <img src={Ma} alt="" className='w-[50%] absolute top-[20%] bottom-[50%] left[76%] right-[8%]' />
      </section>
     </div>
       
    </div>
  )
}

export default LandingPage
