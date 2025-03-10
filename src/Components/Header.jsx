import React from 'react'

const Header = () => {
  return (
    <div className='bg-transparent my-6 flex items-center justify-center'>
            <div className='flex rounded-full bg-[#e8e5e480] p-1 gap-2 font-semibold text-sm items-center justify-center fixed z-50 mt-12 backdrop-blur-md'>
                <div className='px-6 py-2.5 bg-white rounded-full shadow text-black'><p>Home</p></div>
                <div className='px-6 py-2.5'>Profile</div>
                <div className='px-6 py-2.5'>Contact</div>
            </div>
    </div>
  )
}

export default Header