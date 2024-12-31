import Ma from '../assets/Ma.svg'
import ArtisanLink from '../assets/ArtisanLink.svg'

const LandingPage = () => {
  return (
    <div className="bg-primary">
     <div className="flex">
      
      <section className="bg-secondary w-[35%] h-screen">
        <div className=" justify-center relative top-[10%]">
          <div className="flex justify-center relative">
            <img src={ ArtisanLink } alt="" className='w-[15%]'/>
            <h1 className="text-5xl font-poppins-medium text-text">
              ArtisanLink
            </h1>
            </div>
          <div/>
          <div className="flex justify-center">
            <h1 className="text-2xl font-poppins-light text-text justify-start ">
              Welcome back to our app
            </h1>
          </div>
        </div>
        <div className="flex justify-start p-[20%]">
          <label htmlFor="email" className='font-poppins-light'>Email</label>
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
