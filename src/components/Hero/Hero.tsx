import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
        <h1 className='font-normal text-2xl md:text-4xl xl:text-5xl text-white'>De ahora en adelante, hacés mas con tu dinero</h1>
        <div className="w-1/5 border-t-4 border-primary md:w-1/4 md:hidden"></div>
        <h3 className='font-semibold text-xl text-primary md:text-2xl xl:text-3xl text-color3'>Tu nueva <span className='font-bold'>billetera virtual</span></h3>
    </div>
  )
}

export default Hero