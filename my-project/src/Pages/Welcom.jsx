import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Welcom() {
  return (
    <div>
        <NavBar/>
        <div className="bg-[url('https://ar.timeoutriyadh.com/cloud/artimeoutriyadh/2022/10/30/Diriyah-Gate-in-Riyadh1.jpg')] h-screen grid place-content-center bg-no-repeat">
        <Link to={`/Home`} className='bg-transparent hover:bg-lime-950 text-lime-950 font-semibold hover:text-white py-2 px-4 border border-lime-950 hover:border-transparent rounded'>
            Home Page
            </Link>
            </div>
        <Footer/>
    </div>
  )
}

export default Welcom