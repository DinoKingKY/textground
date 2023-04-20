import React from 'react'

function Confirm(props) {
  return (
    <>
        <div className=' lg:flex lg:justify-center bg-orange-600 text-white text-center py-1 mb-4 invisible '
    style={{visibility: props.confirm.vis}}>
        <h1 className='text-xl font-semibold'>{props.confirm.msg}</h1>
        <div className='space-x-2 lg:ml-5'>

        <button className={`text-sm sm:text-base bg-red-700 font-bold px-2 py-1 rounded active:bg-gray-500`} onClick={props.conybtn} >Yes</button>
        <button className={`text-sm sm:text-base bg-lime-600 font-bold px-2 py-1 rounded active:bg-gray-500`} onClick={props.connbtn} >NO</button>

        </div>
    </div>
    
    </>
  )
}

export default Confirm