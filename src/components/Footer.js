import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <>
    <footer className={` w-[100vw] mt-[7vh]  ${props.modebg}  text-${props.modetext}`}>
  <div className={`container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col`}>
    <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white w-10 h- p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className={`ml-3 text-xl `}>{props.title}</span>
    </a>
    <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {props.copyright}
      <p className={` ml-1  cursor-default inline`} >{props.ownertitle}</p>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://www.facebook.com/profile.php?id=100077002034936' className=" active:text-orange-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href='https://twitter.com/Kuldeep72156118' className="ml-3  active:text-orange-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href='https://www.instagram.com/__king__kd__/' className="ml-3  active:text-orange-500" rel="noopener noreferrer" target="_blank">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href='https://www.linkedin.com/in/kuldeep-yadav-a6a13322b' className="ml-3  active:text-orange-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    
    </>
  )
}

export default Footer

Footer.propTypes ={
          title: PropTypes.string.isRequired
}

Footer.defaultProps = {
          title: 'Put-Title',
          copyright: 'copyright'
          
}