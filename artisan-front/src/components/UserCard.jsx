import React from 'react'
import Carpenter from '../assets/Carpenter.svg'

const UserCard = () => {
  return (
    <div className='flex justify-center'>
      <section className="bg-accent w-[70%] rounded-2xl">
        <img src={Carpenter} alt="" className='p-10 rounded-full w-[30%]' />
      </section>
    </div>
  )
}

export default UserCard
