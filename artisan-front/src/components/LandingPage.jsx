import React, { useState } from 'react';
import Ma from '../assets/Ma.svg';
import ArtisanLink from '../assets/ArtisanLink.svg';
import { FaLock, FaEye, FaEyeSlash, FaGoogle, FaEnvelope } from 'react-icons/fa';

const LandingPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-primary min-h-screen flex">
      <section className="bg-secondary w-[40%] h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-8">
          <img src={ArtisanLink} alt="ArtisanLink Logo" className="w-[15%] mr-4" />
          <h1 className="text-6xl font-poppins-medium text-text">ArtisanLink</h1>
        </div>
        <div className="w-[80%]">
          <label htmlFor="email" className="block text-lg font-poppins-medium text-text mb-2">Email</label>
          <div className="relative mb-4">
            <input type="email" id="email" className="w-full p-4 pl-10 rounded-xl text-xl" placeholder="Your Email" />
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <label htmlFor="password" className="block text-lg font-poppins-medium text-text mb-2">Password</label>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full p-4 pl-10 pr-10 rounded-xl text-xl"
              placeholder="Your Password"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
            </div>
          </div>
          <button className="w-full bg-accent text-text text-xl p-4 rounded-xl mb-4">Login</button>
          <button className="w-full bg-primary text-secondary text-xl p-4 rounded-xl flex items-center justify-center">
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </div>
      </section>
      <section className="flex-1 flex items-center justify-center">
        <img src={Ma} alt="ArtisanLink Logo" className="w-[50%]" />
      </section>
    </div>
  );
};

export default LandingPage;