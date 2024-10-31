import React from 'react';

function Product() {
  return (
      <div className='border rounded-md bg-white'>
        <div className='md:w-[240px] w-[200px] md:h-[390px] relative p-2'>
          <div>
            <img
              src='/solar.webp'
              className='rounded-md shadow-md'
              alt='solar'
            />
          </div>
          <div className='w-full flex justify-end px-2 relative items-center'>
            <svg
              width='24'
              height='24'
              className=' cursor-pointer absolute mt-10'
              viewBox='0 0 37 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M35.3329 11.77C35.3387 14.3346 34.3506 16.8017 32.5763 18.6533C28.5079 22.8717 24.5613 27.27 20.3429 31.3333C19.3746 32.25 17.8396 32.2167 16.9146 31.2583L4.75625 18.655C1.08125 14.845 1.08125 8.695 4.75625 4.88667C5.62482 3.975 6.66948 3.2492 7.8269 2.75329C8.98432 2.25737 10.2304 2.00167 11.4896 2.00167C12.7488 2.00167 13.9948 2.25737 15.1523 2.75329C16.3097 3.2492 17.3543 3.975 18.2229 4.88667L18.6663 5.34333L19.1079 4.88667C19.9782 3.97716 21.0232 3.25269 22.1802 2.75667C23.3372 2.26065 24.5824 2.00329 25.8413 2C28.3746 2 30.7963 3.04 32.5746 4.88667C34.3496 6.73807 35.3382 9.20519 35.3329 11.77Z'
                stroke='#033E4D'
                strokeWidth='2.5'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='product-name md:text-base text-sm mt-4 font-bold text-[#033E4D]'>
              3 kW on-grid solar
            </div>
            <div className='flex items-end justify-between'>
              <div className='solar-name md:text-lg text-base font-bold text-[#033E4D]'>
                TCM Solar
                <div className='flex gap-2'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 33 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                      fill='#38B557'
                    />
                  </svg>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 33 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                      fill='#38B557'
                    />
                  </svg>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 33 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                      fill='#38B557'
                    />
                  </svg>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 33 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                      fill='#38B557'
                    />
                  </svg>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 33 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.6426 0L20.3471 11.4012H32.335L22.6366 18.4476L26.341 29.8488L16.6426 22.8024L6.94412 29.8488L10.6486 18.4476L0.950146 11.4012H12.9381L16.6426 0Z'
                      fill='#D9D9D9'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='solar-name w-1/2 md:text-lg text-sm font-bold text-[#033E4D]'>
              ₹ 3,20,000
            </div>
          </div>
          <div className='md:text-sm text-xs mt-2 cursor-pointer font-medium rounded-md bg-[#E4F3DA] py-2 text-center'>
            Add to compare
          </div>
          <div className='md:text-sm text-xs mt-2 cursor-pointer text-white font-medium rounded-md bg-[#38B557] py-2 text-center'>
            See more
          </div>
        </div>
      </div>
  );
}

export default Product;
