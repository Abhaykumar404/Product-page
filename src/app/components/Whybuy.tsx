import React from 'react';

function Whybuy() {
  return (
    <div className='flex flex-col lg:gap-4 gap-2'>
      <div className='h-[1px] bg-[#033E4D] lg:block hidden'></div>
      <div className='lg:text-3xl lg:mx-auto mx-2 text-2xl font-bold w-full text-[#033E4D]'>
        Who should buy this?
      </div>
      <div className='md:text-lg lg:mx-auto mx-2 text-base font-Medium w-full text-[#033E4D]'>
        Check if this solution meets your need
      </div>
      <div className='flex gap-4 lg:mx-auto px-2 justify-start items-center w-full'>
        <input
          placeholder='Enter monthly electricity bill amount'
          className='border outline-none px-4 placeholder-[#396571] border-[#033E4D] lg:h-16 h-10 flex justify-center items-center lg:text-lg md:text-base text-sm lg:w-3/5 w-4/5 lg:rounded-lg rounded-full bg-[#38B55733] font-normal text-[#033E4D]'
        />

        <svg
          className='lg:h-[90px] lg:w-[87px] w-10 h-10 cursor-pointer'
          viewBox='0 0 87 90'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M29 45H58H29ZM58 45L45.3125 58.125L58 45ZM58 45L45.3125 31.875L58 45ZM43.5 82.5C23.4791 82.5 7.25 65.7113 7.25 45C7.25 24.2888 23.4791 7.5 43.5 7.5C63.5209 7.5 79.75 24.2888 79.75 45C79.75 65.7113 63.5209 82.5 43.5 82.5Z'
            fill='#033E4D'
          />
          <path
            d='M29 45H58M58 45L45.3125 58.125M58 45L45.3125 31.875M43.5 82.5C23.4791 82.5 7.25 65.7112 7.25 45C7.25 24.2888 23.4791 7.5 43.5 7.5C63.5209 7.5 79.75 24.2888 79.75 45C79.75 65.7112 63.5209 82.5 43.5 82.5Z'
            stroke='#FAFBF1'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* show this on Check if the electricity bill is suitable*/}
      <div className='lg:flex hidden mb-8 justify-start items-center gap-4'>
        <svg
          width='52'
          height='52'
          viewBox='0 0 52 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='25.9996'
            cy='26.0016'
            r='15.65'
            stroke='#38B557'
            strokeWidth='2.5'
          />
          <path
            d='M19.5 26.0013L23.8333 30.3346L32.5 21.668'
            stroke='#38B557'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='text-sm font-semibold text-[#38B557]'>
          Yes, this is a suitable solution for you
          <div className='text-base text-[#033E4D] fontMedium'>
            You can reduce up to{' '}
            <span className='font-bold text-[#38B557]'>90%</span> of your bill
            energy charges
          </div>
        </div>
      </div>

      {/* show this on Check if the electricity bill is low*/}
      <div className='hidden mb-8 justify-start items-center gap-4'>
        <svg
          width='34'
          height='34'
          viewBox='0 0 34 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='16.9'
            cy='16.9'
            r='15.65'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='21.5658'
            y1='11.8362'
            x2='10.9295'
            y2='23.6544'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='21.5658'
            y1='11.8362'
            x2='10.9295'
            y2='23.6544'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='22.1638'
            y1='22.5658'
            x2='10.3456'
            y2='11.9295'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='22.1638'
            y1='22.5658'
            x2='10.3456'
            y2='11.9295'
            stroke='#F07979'
            strokeWidth='2.5'
          />
        </svg>

        <div className='text-sm font-semibold text-[#F07979]'>
          Not recommended! Your bill is too low
          <div className='text-base text-[#033E4D] font-medium'>
            Look for a system with lower capacity
          </div>
        </div>
      </div>

      {/* show this on Check if the electricity bill is high*/}
      <div className='hidden mb-8 justify-start items-center gap-4'>
        <svg
          width='34'
          height='34'
          viewBox='0 0 34 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='16.9'
            cy='16.9'
            r='15.65'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='21.5658'
            y1='11.8362'
            x2='10.9295'
            y2='23.6544'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='21.5658'
            y1='11.8362'
            x2='10.9295'
            y2='23.6544'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='22.1638'
            y1='22.5658'
            x2='10.3456'
            y2='11.9295'
            stroke='#F07979'
            strokeWidth='2.5'
          />
          <line
            x1='22.1638'
            y1='22.5658'
            x2='10.3456'
            y2='11.9295'
            stroke='#F07979'
            strokeWidth='2.5'
          />
        </svg>

        <div className='text-sm font-semibold text-[#F07979]'>
          Not recommended! Your bill is too high
          <div className='text-base text-[#033E4D] font-medium'>
            Look for a system with higher capacity
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-[#D9D9D9] mt-8 mb-4 lg:hidden'></div>
      <div className='flex lg:mx-auto mx-2 w-full'>
        <div className='flex w-1/2 justify-start items-center gap-4'>
          <svg
            className='lg:w-[81px] lg:h-[81px] w-12 h-12'
            viewBox='0 0 81 81'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M37.0667 48.8598C37.0667 53.51 44.6113 57.284 53.915 57.284C63.2186 57.284 70.7633 53.51 70.7633 48.8598M10.1094 32.0115C10.1094 36.6617 17.654 40.4357 26.9577 40.4357C30.7519 40.4357 34.253 39.8089 37.0667 38.7509M10.1094 43.8053C10.1094 48.4555 17.654 52.2295 26.9577 52.2295C30.7519 52.2295 34.2496 51.6027 37.0667 50.5447M53.915 43.8053C44.6113 43.8053 37.0667 40.0313 37.0667 35.3812C37.0667 30.7311 44.6113 26.957 53.915 26.957C63.2186 26.957 70.7633 30.7311 70.7633 35.3812C70.7633 40.0313 63.2186 43.8053 53.915 43.8053Z'
              stroke='#38B557'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10.1094 18.5312V55.5975C10.1094 60.2477 17.654 64.0217 26.9577 64.0217C30.7519 64.0217 34.2496 63.3949 37.0667 62.3369M37.0667 62.3369V35.3796M37.0667 62.3369C37.0667 66.987 44.6113 70.761 53.915 70.761C63.2186 70.761 70.7633 66.987 70.7633 62.3369V35.3796M43.806 28.6402V18.5312'
              stroke='#38B557'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M26.9577 26.9577C17.654 26.9577 10.1094 23.1837 10.1094 18.5335C10.1094 13.8834 17.654 10.1094 26.9577 10.1094C36.2613 10.1094 43.806 13.8834 43.806 18.5335C43.806 23.1837 36.2613 26.9577 26.9577 26.9577Z'
              stroke='#38B557'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='lg:text-2xl text-base font-bold text-[#033E4D]'>
            ₹ 30,500
            <div className='lg:text-base text-xs font-normal'>ANNUAL SAVINGS</div>
          </div>
        </div>

        <div className='flex w-1/2 justify-start items-center gap-4'>
          <svg
            className='lg:w-[81px] lg:h-[81px] w-12 h-12'
            viewBox='0 0 82 81'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M34.5563 44.3249V70.7633V44.3249ZM51.4046 28.255V37.5856C51.4046 39.373 50.6946 41.0872 49.4307 42.351C48.1669 43.6149 46.4527 44.3249 44.6653 44.3249H24.4473C22.66 44.3249 20.9458 43.6149 19.6819 42.351C18.418 41.0872 17.708 39.373 17.708 37.5856V28.2516C17.708 26.4643 18.418 24.7501 19.6819 23.4862C20.9458 22.2223 22.66 21.5123 24.4473 21.5123H44.6653C46.4527 21.5123 48.1669 22.2223 49.4307 23.4862C50.6946 24.7501 51.4046 26.4643 51.4046 28.2516V28.255ZM45.7874 21.5157V10.1094V21.5157ZM23.3252 21.5157V10.1094V21.5157Z'
              fill='#38B557'
            />
            <path
              d='M34.5563 44.3249V70.7633M45.7874 21.5157V10.1094M23.3252 21.5157V10.1094M51.4046 28.255V37.5856C51.4046 39.373 50.6946 41.0872 49.4307 42.351C48.1669 43.6149 46.4527 44.3249 44.6653 44.3249H24.4473C22.66 44.3249 20.9458 43.6149 19.6819 42.351C18.418 41.0872 17.708 39.373 17.708 37.5856V28.2516C17.708 26.4643 18.418 24.7501 19.6819 23.4862C20.9458 22.2223 22.66 21.5123 24.4473 21.5123H44.6653C46.4527 21.5123 48.1669 22.2223 49.4307 23.4862C50.6946 24.7501 51.4046 26.4643 51.4046 28.2516V28.255Z'
              stroke='#38B557'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
            <path
              d='M57.0215 53.9141L51.4043 64.0231H64.8829L59.2657 74.132'
              stroke='#38B557'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <div className='lg:text-2xl text-base font-bold text-[#033E4D]'>
            4,380 kWh
            <div className='lg:text-base text-xs font-normal'>ANNUAL GENERATION</div>
          </div>
        </div>
      </div>
      <div className='h-[6px] bg-[#D9D9D9] mt-8 mb-4 lg:hidden'></div>

      <div className='h-[1px] bg-[#033E4D] lg:block hidden'></div>
    </div>
  );
}

export default Whybuy;
