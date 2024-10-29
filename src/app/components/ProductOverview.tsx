import React from 'react'

function ProductOverview() {
  return (
    <div className='flex flex-col gap-4 xl:max-w-[1340px] mt-10 2xl:max-w-[1470px] lg:text-3xl text-xl text-[#033E4D] font-bold xl-mx-auto mx-2'>
          Product Overview
          <div className='text-xl font-bold text-[#033E4D] flex gap-4'>
            Zircle Score: <span className='text-[#38B557]'>9.4/10</span>
            <div className='w-[154px] h-9 rounded-md bg-[#033E4D] text-white lg:text-base flex justify-center items-center text-sm font-bold'>
              Premium
            </div>
          </div>
          <div className='grid lg:grid-cols-3 lg:gap-0 gap-4 mt-8'>
            <div className='flex lg:justify-center justify-start items-center gap-2 lg:gap-4'>
              <svg
                className='lg:h-[56px] lg:w-[56px] w-[30px] h-[30px]'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.5 20.625H27.5M3.75 15H26.25M5 9.375H25M15 3.75V26.25M10 4.375L8.125 25.625M20 4.375L21.875 25.625M1.25 26.25L5.17875 3.75H24.8212L28.75 26.25H1.25Z'
                  stroke='#033E4D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='lg:text-xl font-bold text-lg text-[#033E4D]'>
                <span className='text-[#6A8B94]'>PANEL </span>
                <div className='text-lg font-normal'>
                  Monoperc Bifacial 545-565 Wp panels - 9 nos
                </div>
                <div className='lg:text-xl font-bold'>
                  Adani/ Waree/ Renewsys
                </div>
              </div>
            </div>
            <div className='flex lg:justify-center justify-start items-center gap-2 lg:gap-4'>
              <svg
                className='lg:h-[56px] lg:w-[56px] w-[30px] h-[30px]'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.5 3.75H7C6.80109 3.75 6.61032 3.82902 6.46967 3.96967C6.32902 4.11032 6.25 4.30109 6.25 4.5V25.5C6.25 25.6989 6.32902 25.8897 6.46967 26.0303C6.61032 26.171 6.80109 26.25 7 26.25H12.5M13.75 8.75H16.25M13.75 15H16.25M13.75 21.25H16.25M17.5 3.75H23C23.1989 3.75 23.3897 3.82902 23.5303 3.96967C23.671 4.11032 23.75 4.30109 23.75 4.5V25.5C23.75 25.6989 23.671 25.8897 23.5303 26.0303C23.3897 26.171 23.1989 26.25 23 26.25H17.5'
                  stroke='#033E4D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <div className='lg:text-xl font-bold text-lg text-[#033E4D]'>
                <span className='text-[#6A8B94]'>Growwatt </span>
                <div className='text-lg font-normal'>
                On-grid string inverter 5 kW 3-phase
                </div>
                <div className='lg:text-xl font-bold'>
                INVERTER
                </div>
              </div>
            </div>
            <div className='flex lg:justify-center justify-start items-center gap-2 lg:gap-4'>
              <svg
                className='lg:h-[56px] lg:w-[56px] w-[30px] h-[30px]'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 28.75C15.3315 28.75 15.6495 28.6183 15.8839 28.3839C16.1183 28.1495 16.25 27.8315 16.25 27.5C16.25 27.1685 16.1183 26.8505 15.8839 26.6161C15.6495 26.3817 15.3315 26.25 15 26.25C14.6685 26.25 14.3505 26.3817 14.1161 26.6161C13.8817 26.8505 13.75 27.1685 13.75 27.5C13.75 27.8315 13.8817 28.1495 14.1161 28.3839C14.3505 28.6183 14.6685 28.75 15 28.75ZM3.75 10C4.08152 10 4.39946 9.8683 4.63388 9.63388C4.8683 9.39946 5 9.08152 5 8.75C5 8.41848 4.8683 8.10054 4.63388 7.86612C4.39946 7.6317 4.08152 7.5 3.75 7.5C3.41848 7.5 3.10054 7.6317 2.86612 7.86612C2.6317 8.10054 2.5 8.41848 2.5 8.75C2.5 9.08152 2.6317 9.39946 2.86612 9.63388C3.10054 9.8683 3.41848 10 3.75 10ZM3.75 22.5C4.08152 22.5 4.39946 22.3683 4.63388 22.1339C4.8683 21.8995 5 21.5815 5 21.25C5 20.9185 4.8683 20.6005 4.63388 20.3661C4.39946 20.1317 4.08152 20 3.75 20C3.41848 20 3.10054 20.1317 2.86612 20.3661C2.6317 20.6005 2.5 20.9185 2.5 21.25C2.5 21.5815 2.6317 21.8995 2.86612 22.1339C3.10054 22.3683 3.41848 22.5 3.75 22.5Z'
                  fill='#033E4D'
                  stroke='#033E4D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M26.25 9.19224V20.8097C26.2501 20.9436 26.2143 21.0751 26.1464 21.1905C26.0784 21.3059 25.9809 21.401 25.8637 21.466L15.3638 27.2985C15.2524 27.3602 15.1273 27.3926 15 27.3926C14.8727 27.3926 14.7476 27.3602 14.6362 27.2985L4.13625 21.466C4.01915 21.401 3.92157 21.3059 3.85364 21.1905C3.78572 21.0751 3.74994 20.9436 3.75 20.8097V9.19224C3.75016 9.05854 3.78605 8.92732 3.85396 8.81216C3.92187 8.697 4.01933 8.60208 4.13625 8.53724L14.6362 2.70349C14.7476 2.64176 14.8727 2.60937 15 2.60938C15.1273 2.60937 15.2524 2.64176 15.3638 2.70349L25.8637 8.53724C25.9807 8.60208 26.0781 8.697 26.146 8.81216C26.214 8.92732 26.2498 9.05854 26.25 9.19224Z'
                  stroke='#033E4D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.41016 9.11766L14.6352 14.7977C14.7466 14.8596 14.872 14.8921 14.9995 14.8921C15.127 14.8921 15.2525 14.8596 15.3639 14.7977L25.6252 9.09766M15.0002 26.2502V15.0002'
                  stroke='#033E4D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <div className='lg:text-xl font-bold text-lg text-[#033E4D]'>
                <span className='text-[#6A8B94]'>PANEL MOUNTING STRUCTURE </span>
                <div className='text-lg font-normal'>
                Elevated 6ft-8ft structure 
                </div>
                <div className='lg:text-xl font-bold'>
                GI tubes
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductOverview