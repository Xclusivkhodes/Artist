import React from 'react'
import image from '../assets/image copy.png'
import StarGold from '../assets/StarGold.svg'

const ArtHomepage = () => {
  return (
    <div className='bg-primary h-screen '>
      <section className='bg-secondary h-[70%] relative top-[30%] flex'>
       <div>
       <img src={image} alt="" width={300} height={300} className=' rounded-full relative bottom-[20%] left-[5%] ' />
       </div>
       <div className='flex flex-col relative left-[2%]'>
        <h1 className='text-text font-poppins-medium text-4xl mt-[10%] font-semi-bold'>Peter Forson</h1>
        <h3 className='text-text font-poppins-light text-xl '>Carpenter</h3>
        <div className='mt-2'>
        <button className='bg-text px-12 rounded-xl py-2 text-secondary font-semibold text-lg mr-5'>Edit</button>
        <button className='bg-text px-12 rounded-xl py-2 text-secondary font-semibold text-lg'>Edit</button>
       </div>
       <div className='mt-4'>
        <h2 className='flex text-text text-lg font-poppins-light'>
          Rating: 
          <img src={StarGold} alt="" width={40} className=' -mr-3 ' />
          <img src={StarGold} alt="" width={40} className=' -mr-3 ' />
          <img src={StarGold} alt="" width={40} className=' -mr-3 ' />
          <img src={StarGold} alt="" width={40} className=' -mr-3 ' />
          <img src={StarGold} alt="" width={40} className=' -mr-3 ' />
        </h2>
       </div>
       </div>
      </section>
      <section>
      <div className=' w-full h-[1px] relative top-[20%] bg-[#d9d9d9] border-text'>

      </div>
      </section>
      
    </div>
  )
}

export default ArtHomepage
