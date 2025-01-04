import MapView from "../components/MapView"
import Search from "../assets/Search.svg"
import UserCard from "../components/UserCard"
import Carpenter from "../assets/Carpenter.svg"
import image from "../assets/image copy.png"

const HomePage = () => {
  const users = [
    { name: 'Forson Peter', image: image, distance: 20, profession: 'Carpenter', rating: 5 },
    { name: 'John Doe', image: image, distance: 15, profession: 'Mechanic', rating: 4.5 },
    { name: 'Jane Smith', image: image, distance: 10, profession: 'Tailor', rating: 4 },
  ];

  return (
    <div>
      <div className="flex">
      <section className="w-[50%]  ">
        <MapView />
       </section>
       <section className="bg-primary w-[50%]">
        <div className="flex justify-center">
         <h1 className="text-4xl font-poppins-medium text-accent pt-[10%] pb-5 font-bold">
          Artisans Around You
         </h1>
        </div>
        <div className="flex h-13 w-[100%] bg-accent bg-opacity-[53%] items-center justify-center">
         <div className="flex justify-center whitespace-nowrap p-4  ">
          <button className="bg-primary px-[4%] mx-2 h-7 rounded-full">All</button>
          <button className="bg-primary px-[4%] mx-2 h-7 rounded-full">Carpenter</button>
          <button className="bg-primary px-[4%] mx-2 h-7 rounded-full">Mechanic</button>
          <button className="bg-primary px-[4%] mx-2 h-7 rounded-full">Tailor</button>
          <button className="bg-primary px-[4%] mx-2 h-7 rounded-full">Shoe Cobler</button>
         </div>
        </div>
        <div className="flex justify-center mt-[5%]">
         <img src={Search} alt="" width={40} height={40} className="p-0 m-0 relative left-[7%]" />
         <input type="search" className="bg-accent w-[80%] p-5 rounded-full m-0" />
        </div>
        <div className="w-[100%] h-[40%] flex overflow-y-auto no-scrollbar flex-col items-center ">
            {users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                image={user.image}
                distance={user.distance}
                profession={user.profession}
                rating={user.rating}
              />
            ))}
          </div>
       </section>
      </div>
    </div>
  )
}

export default HomePage
