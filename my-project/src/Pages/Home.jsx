import React, {useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import  {EXPO} from './Information'
import { Link } from 'react-router-dom'
// import VideoPlayer from "react-video-js-player";
function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExpo = EXPO.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-sm:bg-[url('https://cdn.pixabay.com/photo/2022/08/09/19/35/saudi-arabia-7375729_1280.jpg')] h-screen bg-no-repeat max-sm:h-screen bg-[url('https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2023/03/Riyadh-AIr.jpg?ssl=1')]">
        <NavBar/>
        <div className="flex min-h-screen items-center justify-center p-10">
  <div className="w-max">
    <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold max-sm:text-l">
        Welcom To Riyadh 
    </p>
  </div>
</div>
{/* <VideoPlayer
            className="flex items-center"
            src="https://youtu.be/ZDqEXYdOS6A"
            controls
        /> */}
<div className="w-full mx-auto mb-6 h-16 max-sm:items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-32 h-8 p-4 border border-black rounded-lg items-center"
          />
        </div>
<div className="grid grid-cols-1 max-sm:flex max-sm:flex-col max-sm:px-20 md:grid-cols-4 space-x-2">
  {filteredExpo.map((card) => (
    <div key={card.id} className="w-full mx-auto mb-6 ">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-60 h-full shadow-lg rounded-lg overflow-hidden text-center"style={{ backgroundImage: `url(${card.image})`,backgroundSize: 'cover'}}>
        {/* <img src={card.IMAGE} className="w-full h-40 object-cover rounded-t-lg" alt={card.title} /> */}
        <Link to={`/Home/${card.id}`}>
          <blockquote className="relative p-8 mb-4 text-gray-800">
            <p className="text-lg font-bold text-center text-white">{card.title}</p>
          </blockquote>
        </Link>
      </div>
    </div>
  ))}
</div>
<Footer/>
    </div>
  )
}

export default Home