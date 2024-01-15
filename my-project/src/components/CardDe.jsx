import React from 'react'
import { useParams } from 'react-router-dom'
import { EXPO } from '../Pages/Information';
import NavBar from './NavBar';
import Footer from './Footer';
function CardDe() {
    const {id}=useParams();
    const card=EXPO.find((item)=>item.id==id);
  return (
    <>
    <div className='flex flex-col justify-between w-full'>
      <div>
    <NavBar />
    </div>
    <div>
    <div className="flex flex-col items-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold mb-2">{card.title}</h2>
      <p className="text-gray-600">{card.description}</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <img src={card.IMAGE} alt={card.title} className="w-full h-full object-cover" />
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
    </div>
  </div>
</div>
</div>
<div className='mt-20'>
  <Footer />
  </div>
  </div>
  </>
  )
}

export default CardDe