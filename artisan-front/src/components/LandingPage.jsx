import Ma from '../assets/Ma.svg'
import ArtisanLink from '../assets/ArtisanLink.svg'

const LandingPage = () => {
  return (
    <div className="bg-primary">
     <div className="flex">
      
      <section className="bg-secondary w-[35%] h-screen">
        <div className="flex justify-center">
         <img src={ ArtisanLink } alt="" className='w-[15%]'/>
         <h1 className="text-5xl font-poppins-medium text-text">
          ArtisanLink
         </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-poppins-light text-gray">
            Welcome back
          </h1>
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