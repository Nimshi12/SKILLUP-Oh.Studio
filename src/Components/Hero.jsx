import React from 'react'

const Hero = () => {
  return (
    <section className='text-center py-8 sm:px-6 h-[600px] flex flex-col items-center justify-center'>
        <div className='text-center mx-auto py-4 px-4 sm:w-3xl  '>
            <h1 className='text-4xl font-semibold sm:text-7xl sm:leading-[1.2]'>A brand and product designer working with clients globally</h1>
        </div>
        <div className='hidden sm:flex sm:items-center sm:justify-center sm:gap-5 sm:py-6 sm:text-sm sm:font-semibold'>
            <div>Expertise</div>
            <div className='py-1 px-3 bg-[#e8e5e480] rounded-full'>Branding</div>
            <div className='py-1 px-3 bg-[#e8e5e480] rounded-full'>Product</div>
            <div className='py-1 px-3 bg-[#e8e5e480] rounded-full'>Design Systems</div>
        </div>
    </section>
    
  )
}

export default Hero