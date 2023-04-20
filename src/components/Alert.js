import React from 'react'

function Alert(props) {

  return (
    <>
    <div className='h-[40px] my-2'>

     <div className=' bg-orange-600 text-white text-center  py-2  invisible '
    style={{visibility: props.alerting.vis}}>
        <h1 className='text-xl font-semibold '>{props.alerting.msg}</h1>
    </div>
      </div>
    
    </>
  )
}

export default Alert