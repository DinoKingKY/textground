import React from 'react'
import {


  Link
} from 'react-router-dom';
export default function How4(props) {
  return (
    <>
          <section className=' mt-5 mb-12 mx-auto flex flex-col xl:flex-row  w-[90vw]'>
          <section className='w-[80vw] mx-auto' >
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-2 xl:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full xl:w-1/2 w-5/6 mb-10 xl:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://www.nortonlifelock.com/sites/default/files/styles/blogs_hero_teaser_small/public/2021-04/GettyImages-1170073827.jpg?h=3329de5a&itok=2xHa8NvG"/>
    </div>
    <div className="lg:flex-grow xl:w-1/2 xl:pl-24  flex flex-col xl:items-start xl:text-left items-center text-center">
      <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium  text-${props.modetext}`}>What's the 
        <br />CONCLUSION ?
      </h1>
      <p className={`mb-8 leading-relaxed  text-${props.modetext}`}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link to='/about/how3' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</Link>

      </div>
    </div>
  </div>
</section>
</section>
<section className=' xl:w-[20vw] w-[85vw] mx-auto xl:h-[60vh] sm:h-[25vh] md:h-[35vh] h-[17vh] flex xl:flex-col overflow-x-scroll xl:overflow-x-auto  xl:overflow-y-scroll  space-x-1 xl:space-x-0 xl:space-y-1 '>
          <Link to='/about/how1'>
          <div className='  xl:w-auto  w-[35vw]  flex flex-col px-3 py-2  xl:border-b-2 border-lime-600 items-center rounded bg-slate-400 '>
            <img src={require('../../images/side-img.png')} alt="" className='rounded ' />
            <h1 className='text-xs  sm:text-lg xl:text-xs mt-1 text-white'>TEXTGROUND</h1>
          </div>
          </Link>
          <Link to='/about/how2'>
          <div className= ' xl:w-auto w-[35vw]  flex flex-col px-3 py-2  xl:border-b-2 border-lime-600 items-center rounded bg-slate-400 '>
            <img src={require('../../images/side-img.png')} alt="" className='rounded ' />
            <h1 className='text-xs sm:text-lg xl:text-xs mt-1 text-white'>FEATURES</h1>
          </div>
          </Link>
          <Link to='/about/how3'>
          <div className='  xl:w-auto  w-[35vw] flex flex-col px-3 py-2  xl:border-b-2 border-lime-600 items-center rounded bg-slate-400 '>
            <img src={require('../../images/side-img.png')} alt="" className='rounded ' />
            <h1 className='text-xs  sm:text-lg xl:text-xs mt-1 text-white'>HOW I BUILD </h1>
          </div>
          </Link>
          <Link to='/about/how4'>
          <div className=  'xl:w-auto w-[35vw] bg-teal-500  flex flex-col px-3 py-2  xl:border-b-2 border-lime-600 items-center rounded '>
            <img src={require('../../images/side-img.png')} alt="" className='rounded ' />
            <h1 className='text-xs  sm:text-lg xl:text-xs mt-1 text-white'>WHAT'S NEXT</h1>
          </div>
          </Link>
        </section>

        </section>
    </>
  )
}
