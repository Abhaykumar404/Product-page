import React from 'react'

function Warranty() {
  return (
    <div className='lg:text-3xl text-xl flex flex-col gap-4 font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl:mx-auto mx-2'>
    Warranty and Services
    <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
      <div className='lg:text-2xl text-lg flex flex-col gap-4 lg:w-1/2 w-full font-bold text-[#6A8B94]'>
        Component Warranty
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              30 years
            </span>
            <br />
            Panel performance warranty
          </div>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              12 years
            </span>
            <br />
            Panel product warranty
          </div>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              7 years
            </span>
            <br />
            Inverter warranty
          </div>
        </div>
      </div>
      <div className='lg:text-2xl text-lg flex flex-col gap-4 lg:w-1/2 w-full font-bold text-[#6A8B94]'>
        Services
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              5+5 years
            </span>
            <br />
            Free plant maintenance
          </div>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              5 years
            </span>
            <br />
            Total system warranty
          </div>
          <div className='bg-[#38B55733] p-4 rounded-md shadow-md text-[#033E4D] text-xs md:text-sm lg:text-lg font-normal'>
            <span className='lg:text-2xl text-lg font-bold'>
              1 year
            </span>
            <br />
            Plant insurance coverage
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Warranty