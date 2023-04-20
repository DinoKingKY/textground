import React from 'react'
import './input.css';
import PropTypes from 'prop-types'
import{

Link
} from 'react-router-dom';
function Header(props) {
  return (
    <>
      <header className={`text-${props.modetext} w-[100vw] ${props.modebg} `} >
        <div className={`container mx-auto flex flex-wrap pt-4 flex-col md:flex-row items-center `}>
          <Link to='/' className="flex title-font font-medium items-center  mb-2 md:mb-0" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl uppercase font-medium">{props.title}</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center space-x-5">
            <Link to='/' className={` hover:text-${props.modetext} cursor-pointer`}>Home</Link>
            <Link to='/about/how1' className={` hover:text-${props.modetext} cursor-pointer`}>About</Link>

          </nav>
          <button onClick={props.togglemode} className={`inline-flex items-center  border-0 py-1 px-3 focus:outline-none ${props.togglestyle}  hover:bg-orange-500 rounded text-base mt-4 md:mt-0 `} >{props.toggletitle}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header

Header.propTypes ={
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title : 'P-title',
}