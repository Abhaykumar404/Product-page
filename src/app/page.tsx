/* eslint-disable @next/next/no-img-element */
import AddsOn from './components/AddsOn';
import JourneyToBuy from './components/JourneyToBuy';
import MobileProductCard from './components/MobileProductCard';
import ProductDetailsCard from './components/ProductDetailsCard';
import ProductOverview from './components/ProductOverview';
import Warranty from './components/Warranty';
import Whybuy from './components/Whybuy';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto'>
        <div className='flex lg:flex-row flex-col justify-center xl:gap-0 gap-4 items-start bg-[#fafbf]'>
          <div className='lg:w-1/2 w-full flex flex-col lg:gap-8'>
            <img src='/solar.webp' alt='solar' />

            <div className='h-[6px] lg:hidden bg-[#D9D9D9]'></div>
            <div className='lg:hidden'>
            <MobileProductCard />  
            </div>
           
          <div className='h-[6px] lg:hidden bg-[#D9D9D9] mt-8 mb-4'></div>
          
            <Whybuy />
          </div>

          <div className='lg:w-1/2 w-full lg:flex hidden justify-center items-center'>
            <ProductDetailsCard />
          </div>
        </div>
      </div>

      {/* Journey of buying from Zircle */}
      <div className='w-full'>
        <div className='h-[1px] bg-[#396571] mt-10 lg:block hidden'></div>
        <div className='flex lg:justify-center justify-start items-center'>
          <ProductOverview />
        </div>
        <div className='h-[1px] bg-[#D9D9D9] mt-10'></div>
        <div className='flex justify-center items-center'>
          <div className='text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl:mx-auto mx-2 lg:text-2xl lg:mt-10 mt-8 text-lg font-bold items-center justify-start flex gap-4'>
            What’s included? See all product details
            <svg
              className='lg:w-[46px] lg:h-[46px] w-[30px] h-[30px] cursor-pointer'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_2873_18227)'>
                <path
                  d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                  stroke='#396571'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_2873_18227'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='h-[4px] bg-[#D9D9D9] mb-10  mt-8 lg:mt-10'></div>

        <div className='flex flex-col justify-center items-center lg:mx-auto mx-2'>
          <Warranty />
        </div>

        <div className='h-[1px] bg-[#D9D9D9] mt-10'></div>
        <div className='flex justify-center items-center'>
          <div className='text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl-mx-auto mx-2 lg:text-2xl mt-10 text-lg font-bold items-center justify-start flex gap-4'>
            See warranty and service details
            <svg
              className='lg:w-[46px] lg:h-[46px] w-5 h-5 cursor-pointer'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_2873_18227)'>
                <path
                  d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                  stroke='#396571'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_2873_18227'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='h-[4px] bg-[#D9D9D9] mb-10  mt-10'></div>
        <div className='flex justify-center items-center'>
          <AddsOn />
        </div>

        <div className='h-[4px] bg-[#D9D9D9] mb-10  mt-10'></div>

        <JourneyToBuy />
      </div>
    </div>
  );
}
