/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className='xl:max-w-[1340px] 2xl:max-w-[1470px] mx-auto'>
        <div className='flex justify-center items-start bg-[#fafbf]  '>
          <div className='w-1/2 flex flex-col gap-8'>
            <img src='/solar.webp' alt='solar' />
            <div className='flex flex-col gap-4'>
              <div className='h-[1px] bg-[#033E4D]'></div>
              <div className='text-3xl font-bold text-[#033E4D]'>
                Who should buy this?
              </div>
              <div className='text-lg fontMedium text-[#033E4D]'>
                Check if this solution meets your need
              </div>
              <div className='flex gap-4 justify-start items-center'>
                <input
                  placeholder='Enter monthly electricity bill amount'
                  className='border outline-none px-4 placeholder-[#396571] border-[#033E4D] h-16 flex justify-center items-center text-lg w-3/5 rounded-lg bg-[#38B55733] font-normal text-[#033E4D]'
                />

                <svg
                  className=' cursor-pointer'
                  width='87'
                  height='90'
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
              <div className='flex mb-8 justify-start items-center gap-4'>
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
                    <span className='font-bold text-[#38B557]'>90%</span> of
                    your bill energy charges
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

              <div className='flex'>
                <div className='flex w-1/2 justify-start items-center gap-4'>
                  <svg
                    width='81'
                    height='81'
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
                  <div className='text-2xl font-bold text-[#033E4D]'>
                    ₹ 30,500
                    <div className='text-base font-normal'>ANNUAL SAVINGS</div>
                  </div>
                </div>

                <div className='flex w-1/2 justify-start items-center gap-4'>
                  <svg
                    width='82'
                    height='81'
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

                  <div className='text-2xl font-bold text-[#033E4D]'>
                    4,380 kWh
                    <div className='text-base font-normal'>
                      ANNUAL GENERATION
                    </div>
                  </div>
                </div>
              </div>

              <div className='h-[1px] bg-[#033E4D]'></div>
            </div>
          </div>

          <div className='w-2/5 flex justify-center items-center'>
            <div className='border w-4/5 h-screen relative border-[#396571] rounded-md p-4'>
              <div className='p-2 bg-[#033E4D] text-white font-semibold left-4 w-40 rounded-b-md text-center absolute top-0'>
                Premium
              </div>
              <div className='w-full flex justify-end items-center'>
                <svg
                  width='37'
                  height='34'
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
              <div className='flex flex-col gap-4'>
                <div className='product-name text-2xl mt-4 font-bold text-[#033E4D]'>
                  3 kW on-grid solar power plant | Monoperc bifacial panels
                </div>
                <div className='solar-name text-3xl font-bold text-[#033E4D]'>
                  TCM Solar
                  <div className='flex gap-2'>
                    <svg
                      width='33'
                      height='30'
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
                      width='33'
                      height='30'
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
                      width='33'
                      height='30'
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
                      width='33'
                      height='30'
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
                      width='33'
                      height='30'
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
                <div className='flex shadow-lg bg-[#38B55733] w-4/5 py-2 px-4 justify-between rounded-md'>
                  <div className='solar-name w-1/2 text-xl font-bold text-[#033E4D]'>
                    ₹ 3,20,000
                    <div className='flex justify-start items-center gap-2'>
                      <span className='text-base font-normal underline'>
                        see more
                      </span>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_2888_18354)'>
                          <path
                            d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                            stroke='#396571'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_2888_18354'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className='text-base w-1/2 flex flex-col justify-end items-end font-normal text-[#033E4D]'>
                    Available Subsidy
                    <div className='text-xl font-bold text-[#38B557]'>
                      ₹ 78,000
                    </div>
                  </div>
                </div>

                <div className='text-lg font-semibold text-[#033E4D] flex gap-2 justify-start items-center'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 27.5L12.0175 19.6075C12.9557 18.5517 14.1069 17.7066 15.3953 17.1279C16.6837 16.5492 18.0801 16.25 19.4925 16.25H20M5 48.75H18.75L28.75 41.25C28.75 41.25 30.775 39.8825 33.75 37.5C40 32.5 33.75 24.585 27.5 28.75C22.41 32.1425 17.5 35 17.5 35'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20 33.75V17.5C20 16.1739 20.5268 14.9021 21.4645 13.9645C22.4021 13.0268 23.6739 12.5 25 12.5H50C51.3261 12.5 52.5979 13.0268 53.5355 13.9645C54.4732 14.9021 55 16.1739 55 17.5V32.5C55 33.8261 54.4732 35.0979 53.5355 36.0355C52.5979 36.9732 51.3261 37.5 50 37.5H33.75'
                      stroke='#396571'
                      strokeWidth='2.5'
                    />
                    <path
                      d='M48.75 25.025L48.775 24.9975M26.25 25.025L26.275 24.9975M37.5 30C36.1739 30 34.9021 29.4732 33.9645 28.5355C33.0268 27.5979 32.5 26.3261 32.5 25C32.5 23.6739 33.0268 22.4021 33.9645 21.4645C34.9021 20.5268 36.1739 20 37.5 20C38.8261 20 40.0979 20.5268 41.0355 21.4645C41.9732 22.4021 42.5 23.6739 42.5 25C42.5 26.3261 41.9732 27.5979 41.0355 28.5355C40.0979 29.4732 38.8261 30 37.5 30Z'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div>
                    EMI from{' '}
                    <span className=' text-xl font-bold text-[#38B557]'>
                      ₹ 2,500
                    </span>
                    <span className='text-base font-medium text-end'>
                      {' '}
                      onwards
                    </span>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <div className='w-2/4 border border-[#033E4D] text-[#033E4D] text-sm font-medium flex gap-2 rounded-lg p-2'>
                    <svg
                      width='25'
                      height='25'
                      viewBox='0 0 25 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.0085 1.66492C12.067 1.59041 12.1416 1.53016 12.2268 1.48874C12.312 1.44731 12.4055 1.42578 12.5002 1.42578C12.5949 1.42578 12.6884 1.44731 12.7736 1.48874C12.8587 1.53016 12.9334 1.59041 12.9918 1.66492L14.8762 4.06075C14.9527 4.1582 15.0564 4.23072 15.1742 4.26911C15.2919 4.3075 15.4185 4.31003 15.5377 4.27638L18.47 3.44513C18.561 3.41918 18.6568 3.41426 18.75 3.43073C18.8432 3.4472 18.9315 3.48464 19.0082 3.54022C19.0848 3.5958 19.1478 3.66807 19.1925 3.75156C19.2371 3.83506 19.2622 3.9276 19.2658 4.02221L19.3804 7.06909C19.3852 7.19286 19.4267 7.31241 19.4996 7.41256C19.5725 7.51271 19.6735 7.58895 19.7898 7.63159L22.6512 8.68367C22.7401 8.71626 22.8203 8.76859 22.886 8.83672C22.9517 8.90485 23.001 8.987 23.0303 9.07697C23.0596 9.16695 23.068 9.2624 23.0551 9.35612C23.0421 9.44985 23.008 9.53941 22.9554 9.61804L21.2575 12.1503C21.1885 12.2533 21.1517 12.3744 21.1517 12.4983C21.1517 12.6221 21.1885 12.7432 21.2575 12.8462L22.9554 15.3785C23.008 15.4571 23.0421 15.5467 23.0551 15.6404C23.068 15.7341 23.0596 15.8296 23.0303 15.9195C23.001 16.0095 22.9517 16.0917 22.886 16.1598C22.8203 16.2279 22.7401 16.2802 22.6512 16.3128L19.7898 17.3649C19.6737 17.4077 19.5729 17.484 19.5002 17.5842C19.4275 17.6843 19.3862 17.8038 19.3814 17.9274L19.2658 20.9743C19.2622 21.0689 19.2371 21.1614 19.1925 21.2449C19.1478 21.3284 19.0848 21.4007 19.0082 21.4563C18.9315 21.5119 18.8432 21.5493 18.75 21.5658C18.6568 21.5823 18.561 21.5773 18.47 21.5514L15.5377 20.7201C15.4184 20.6861 15.2917 20.6884 15.1738 20.7266C15.0558 20.7648 14.9519 20.8373 14.8752 20.9347L12.9929 23.3316C12.9344 23.4061 12.8598 23.4663 12.7746 23.5078C12.6894 23.5492 12.5959 23.5707 12.5012 23.5707C12.4065 23.5707 12.313 23.5492 12.2279 23.5078C12.1427 23.4663 12.068 23.4061 12.0096 23.3316L10.1252 20.9358C10.0487 20.8383 9.945 20.7658 9.82723 20.7274C9.70946 20.689 9.58293 20.6865 9.46372 20.7201L6.53143 21.5514C6.44038 21.5773 6.34462 21.5823 6.25139 21.5658C6.15816 21.5493 6.06989 21.5119 5.99324 21.4563C5.91659 21.4007 5.85357 21.3284 5.80894 21.2449C5.76431 21.1614 5.73923 21.0689 5.7356 20.9743L5.62101 17.9274C5.6162 17.8036 5.57471 17.6841 5.50183 17.5839C5.42894 17.4838 5.32793 17.4076 5.21164 17.3649L2.35018 16.3128C2.26135 16.2802 2.18107 16.2279 2.11541 16.1598C2.04975 16.0917 2.00042 16.0095 1.97113 15.9195C1.94184 15.8296 1.93336 15.7341 1.94633 15.6404C1.9593 15.5467 1.99339 15.4571 2.04601 15.3785L3.74393 12.8462C3.8129 12.7432 3.84972 12.6221 3.84972 12.4983C3.84972 12.3744 3.8129 12.2533 3.74393 12.1503L2.04601 9.61804C1.99339 9.53941 1.9593 9.44985 1.94633 9.35612C1.93336 9.2624 1.94184 9.16695 1.97113 9.07697C2.00042 8.987 2.04975 8.90485 2.11541 8.83672C2.18107 8.76859 2.26135 8.71626 2.35018 8.68367L5.21164 7.63159C5.32774 7.58878 5.42852 7.51247 5.50121 7.41234C5.57391 7.3122 5.61524 7.19274 5.61997 7.06909L5.7356 4.02221C5.73923 3.9276 5.76431 3.83506 5.80894 3.75156C5.85357 3.66807 5.91659 3.5958 5.99324 3.54022C6.06989 3.48464 6.15816 3.4472 6.25139 3.43073C6.34462 3.41426 6.44038 3.41918 6.53143 3.44513L9.46372 4.27638C9.58293 4.31003 9.70946 4.3075 9.82723 4.26911C9.945 4.23072 10.0487 4.1582 10.1252 4.06075L12.0106 1.66492H12.0085Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                      />
                      <path
                        d='M9.375 12.5013L11.4583 14.5846L15.625 10.418'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex flex-col'>
                      SBI solar loan starting at 7.5% interest p. a.
                      <a className='underline text-[#38B557]'>
                        Check eligibility
                      </a>
                    </div>
                  </div>
                  <div className='w-2/4 border text-sm border-[#033E4D] text-[#033E4D] font-medium flex gap-2 rounded-lg p-2'>
                    <svg
                      width='25'
                      height='25'
                      viewBox='0 0 25 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.0085 1.66492C12.067 1.59041 12.1416 1.53016 12.2268 1.48874C12.312 1.44731 12.4055 1.42578 12.5002 1.42578C12.5949 1.42578 12.6884 1.44731 12.7736 1.48874C12.8587 1.53016 12.9334 1.59041 12.9918 1.66492L14.8762 4.06075C14.9527 4.1582 15.0564 4.23072 15.1742 4.26911C15.2919 4.3075 15.4185 4.31003 15.5377 4.27638L18.47 3.44513C18.561 3.41918 18.6568 3.41426 18.75 3.43073C18.8432 3.4472 18.9315 3.48464 19.0082 3.54022C19.0848 3.5958 19.1478 3.66807 19.1925 3.75156C19.2371 3.83506 19.2622 3.9276 19.2658 4.02221L19.3804 7.06909C19.3852 7.19286 19.4267 7.31241 19.4996 7.41256C19.5725 7.51271 19.6735 7.58895 19.7898 7.63159L22.6512 8.68367C22.7401 8.71626 22.8203 8.76859 22.886 8.83672C22.9517 8.90485 23.001 8.987 23.0303 9.07697C23.0596 9.16695 23.068 9.2624 23.0551 9.35612C23.0421 9.44985 23.008 9.53941 22.9554 9.61804L21.2575 12.1503C21.1885 12.2533 21.1517 12.3744 21.1517 12.4983C21.1517 12.6221 21.1885 12.7432 21.2575 12.8462L22.9554 15.3785C23.008 15.4571 23.0421 15.5467 23.0551 15.6404C23.068 15.7341 23.0596 15.8296 23.0303 15.9195C23.001 16.0095 22.9517 16.0917 22.886 16.1598C22.8203 16.2279 22.7401 16.2802 22.6512 16.3128L19.7898 17.3649C19.6737 17.4077 19.5729 17.484 19.5002 17.5842C19.4275 17.6843 19.3862 17.8038 19.3814 17.9274L19.2658 20.9743C19.2622 21.0689 19.2371 21.1614 19.1925 21.2449C19.1478 21.3284 19.0848 21.4007 19.0082 21.4563C18.9315 21.5119 18.8432 21.5493 18.75 21.5658C18.6568 21.5823 18.561 21.5773 18.47 21.5514L15.5377 20.7201C15.4184 20.6861 15.2917 20.6884 15.1738 20.7266C15.0558 20.7648 14.9519 20.8373 14.8752 20.9347L12.9929 23.3316C12.9344 23.4061 12.8598 23.4663 12.7746 23.5078C12.6894 23.5492 12.5959 23.5707 12.5012 23.5707C12.4065 23.5707 12.313 23.5492 12.2279 23.5078C12.1427 23.4663 12.068 23.4061 12.0096 23.3316L10.1252 20.9358C10.0487 20.8383 9.945 20.7658 9.82723 20.7274C9.70946 20.689 9.58293 20.6865 9.46372 20.7201L6.53143 21.5514C6.44038 21.5773 6.34462 21.5823 6.25139 21.5658C6.15816 21.5493 6.06989 21.5119 5.99324 21.4563C5.91659 21.4007 5.85357 21.3284 5.80894 21.2449C5.76431 21.1614 5.73923 21.0689 5.7356 20.9743L5.62101 17.9274C5.6162 17.8036 5.57471 17.6841 5.50183 17.5839C5.42894 17.4838 5.32793 17.4076 5.21164 17.3649L2.35018 16.3128C2.26135 16.2802 2.18107 16.2279 2.11541 16.1598C2.04975 16.0917 2.00042 16.0095 1.97113 15.9195C1.94184 15.8296 1.93336 15.7341 1.94633 15.6404C1.9593 15.5467 1.99339 15.4571 2.04601 15.3785L3.74393 12.8462C3.8129 12.7432 3.84972 12.6221 3.84972 12.4983C3.84972 12.3744 3.8129 12.2533 3.74393 12.1503L2.04601 9.61804C1.99339 9.53941 1.9593 9.44985 1.94633 9.35612C1.93336 9.2624 1.94184 9.16695 1.97113 9.07697C2.00042 8.987 2.04975 8.90485 2.11541 8.83672C2.18107 8.76859 2.26135 8.71626 2.35018 8.68367L5.21164 7.63159C5.32774 7.58878 5.42852 7.51247 5.50121 7.41234C5.57391 7.3122 5.61524 7.19274 5.61997 7.06909L5.7356 4.02221C5.73923 3.9276 5.76431 3.83506 5.80894 3.75156C5.85357 3.66807 5.91659 3.5958 5.99324 3.54022C6.06989 3.48464 6.15816 3.4472 6.25139 3.43073C6.34462 3.41426 6.44038 3.41918 6.53143 3.44513L9.46372 4.27638C9.58293 4.31003 9.70946 4.3075 9.82723 4.26911C9.945 4.23072 10.0487 4.1582 10.1252 4.06075L12.0106 1.66492H12.0085Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                      />
                      <path
                        d='M9.375 12.5013L11.4583 14.5846L15.625 10.418'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex flex-col'>
                      Ecofy instant loan with emi at Rs 2999 p.m.
                      <a className='underline text-[#38B557]'>
                        Check eligibility
                      </a>
                    </div>
                  </div>
                </div>

                <div className='text-lg font-bold text-[#033E4D] flex gap-4'>
                  All Offers & Coupons
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 15H20M20 15L15.625 10.625M20 15L15.625 19.375M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z'
                      stroke='#396571'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>

                <div className='h-[2px] w-full bg-[#033E4D]'></div>

                <div className='flex gap-4'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20 47.5C21.3261 47.5 22.5979 46.9732 23.5355 46.0355C24.4732 45.0979 25 43.8261 25 42.5C25 41.1739 24.4732 39.9021 23.5355 38.9645C22.5979 38.0268 21.3261 37.5 20 37.5C18.6739 37.5 17.4021 38.0268 16.4645 38.9645C15.5268 39.9021 15 41.1739 15 42.5C15 43.8261 15.5268 45.0979 16.4645 46.0355C17.4021 46.9732 18.6739 47.5 20 47.5ZM45 47.5C46.3261 47.5 47.5979 46.9732 48.5355 46.0355C49.4732 45.0979 50 43.8261 50 42.5C50 41.1739 49.4732 39.9021 48.5355 38.9645C47.5979 38.0268 46.3261 37.5 45 37.5C43.6739 37.5 42.4021 38.0268 41.4645 38.9645C40.5268 39.9021 40 41.1739 40 42.5C40 43.8261 40.5268 45.0979 41.4645 46.0355C42.4021 46.9732 43.6739 47.5 45 47.5Z'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeMiterlimit='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M25.125 42.5H37.5V16.5C37.5 16.1022 37.342 15.7206 37.0607 15.4393C36.7794 15.158 36.3978 15 36 15H2.5M14.125 42.5H9C8.80302 42.5 8.60796 42.4612 8.42597 42.3858C8.24399 42.3104 8.07863 42.1999 7.93934 42.0607C7.80005 41.9214 7.68956 41.756 7.61418 41.574C7.5388 41.392 7.5 41.197 7.5 41V28.75'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                    />
                    <path
                      d='M5 22.5H15'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M37.5 22.5H51.525C51.8149 22.5001 52.0987 22.5842 52.3418 22.7421C52.5849 22.9001 52.7771 23.1251 52.895 23.39L57.37 33.46C57.4553 33.6512 57.4995 33.8581 57.5 34.0675V41C57.5 41.197 57.4612 41.392 57.3858 41.574C57.3104 41.756 57.1999 41.9214 57.0607 42.0607C56.9214 42.1999 56.756 42.3104 56.574 42.3858C56.392 42.4612 56.197 42.5 56 42.5H51.25M37.5 42.5H40'
                      stroke='#396571'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                    />
                  </svg>
                  <div className='text-lg font-bold text-[#033E4D]'>
                    <span className='text-[#38B557]'>Fast Delivery</span>{' '}
                    Delivery in 2 weeks
                    <div className='text-base'>
                      Project completion in 4-6 weeks
                    </div>
                    <a className='text-sm font-semibold underline text-[#38B557]'>
                      See complete installation process and timelines
                    </a>
                  </div>
                </div>

                <div className='flex mt-4'>
                  <input
                    type='text'
                    name=''
                    className=' outline-none placeholder-red-600 w-3/5 px-2'
                    placeholder='Check availability in your area'
                    id=''
                  />
                  <div className='p-2 flex border px-4 justify-center items-center border-[#396571] rounded-md text-[#033E4D] font-semibold gap-2 bg-[#c5dae0]'>
                    Enter pincode
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_2888_18358)'>
                        <path
                          d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                          stroke='#396571'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2888_18358'>
                          <rect width='20' height='20' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Journey of buying from Zircle */}
      <div className='h-[1px] bg-[#396571] mt-10'></div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-[#033E4D] w-full xl:max-w-[1340px] mt-10 mb-10 2xl:max-w-[1470px] mx-auto">Installation process</div>
        <div className='grid grid-cols-5 xl:max-w-[1340px] text-[#033E4D] 2xl:max-w-[14700px] mx-auto'>
          <div className='text-2xl font-bold'>
            <div className='flex justify-start items-center'>
              <svg
                width='83'
                height='83'
                viewBox='0 0 83 83'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M82.0828 41.0414C82.0828 63.708 63.708 82.0828 41.0414 82.0828C18.3749 82.0828 0 63.708 0 41.0414C0 18.3749 18.3749 0 41.0414 0C63.708 0 82.0828 18.3749 82.0828 41.0414Z'
                  fill='#38B557'
                  fillOpacity='0.2'
                />
                <path
                  d='M35.9141 57.9056H32.2497C30.306 57.9056 28.4419 57.1335 27.0675 55.759C25.693 54.3846 24.9209 52.5205 24.9209 50.5768V39.0485C24.9209 37.7884 25.2458 36.5495 25.8642 35.4515C26.4827 34.3536 27.3738 33.4336 28.4516 32.7806L37.6126 27.229C38.7579 26.5349 40.0715 26.168 41.4108 26.168C42.75 26.168 44.0636 26.5349 45.2089 27.229L54.3699 32.7806C55.4474 33.4335 56.3384 34.3531 56.9568 35.4507C57.5753 36.5483 57.9003 37.7868 57.9006 39.0467V50.5768C57.9006 52.5205 57.1285 54.3846 55.754 55.759C54.3796 57.1335 52.5155 57.9056 50.5718 57.9056H46.9074M35.9141 57.9056V50.5768C35.9141 49.119 36.4932 47.7209 37.5241 46.6901C38.5549 45.6593 39.953 45.0802 41.4108 45.0802C42.8685 45.0802 44.2666 45.6593 45.2975 46.6901C46.3283 47.7209 46.9074 49.119 46.9074 50.5768V57.9056M35.9141 57.9056H46.9074'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <svg
                width='211'
                height='2'
                viewBox='0 0 211 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H210'
                  stroke='#88D39A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeDasharray='4 4'
                />
              </svg>
            </div>
            <div className="px-4 flex flex-col mt-4 gap-2">
            Site Visit
            <p className='text-sm font-normal'>
              As soon as you book an order with us, our team will reach out to
              you within 24 hours to schedule a detailed site assessment for
              your building.
            </p>
            </div>
          </div>
          <div className='text-2xl font-bold'>
            <div className='flex justify-start items-center'>
              <svg
                width='83'
                height='83'
                viewBox='0 0 83 83'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M82.6688 41.0414C82.6688 63.708 64.2939 82.0828 41.6274 82.0828C18.9608 82.0828 0.585938 63.708 0.585938 41.0414C0.585938 18.3749 18.9608 0 41.6274 0C64.2939 0 82.6688 18.3749 82.6688 41.0414Z'
                  fill='#38B557'
                  fillOpacity='0.2'
                />
                <path
                  d='M58.4865 32.895V49.9235C58.4866 50.1198 58.4342 50.3125 58.3346 50.4817C58.2351 50.6509 58.092 50.7903 57.9204 50.8855L42.5299 59.4345C42.3667 59.525 42.1832 59.5725 41.9967 59.5725C41.8101 59.5725 41.6267 59.525 41.4635 59.4345L26.073 50.8855C25.9013 50.7903 25.7583 50.6509 25.6588 50.4817C25.5592 50.3125 25.5067 50.1198 25.5068 49.9235V32.895C25.5071 32.6991 25.5597 32.5067 25.6592 32.3379C25.7588 32.1691 25.9016 32.03 26.073 31.9349L41.4635 23.384C41.6267 23.2936 41.8101 23.2461 41.9967 23.2461C42.1832 23.2461 42.3667 23.2936 42.5299 23.384L57.9204 31.9349C58.0918 32.03 58.2346 32.1691 58.3342 32.3379C58.4337 32.5067 58.4863 32.6991 58.4865 32.895Z'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M57.5704 50.0634L42.5298 41.7085C42.3666 41.6181 42.1832 41.5706 41.9966 41.5706C41.8101 41.5706 41.6266 41.6181 41.4634 41.7085L26.4229 50.0634M26.4742 32.7894L41.4616 41.1149C41.625 41.2057 41.8088 41.2534 41.9957 41.2534C42.1826 41.2534 42.3664 41.2057 42.5298 41.1149L57.5704 32.7601M41.9966 57.9016V24.9219'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <svg
                width='211'
                height='2'
                viewBox='0 0 211 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H210'
                  stroke='#88D39A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeDasharray='4 4'
                />
              </svg>
            </div>
            <div className="px-4 flex flex-col mt-4 gap-2">
            Final Design of System
            <p className='text-sm font-normal'>
              Based on the detailed site assessment, we will share the final
              design of the system with you. There is a chance that the final
              capacity of system possible on your building might be slightly
              different from what you had chosen based on our online tool. But
              dont worry, we will not proceed unless you are okay with the final
              design.
            </p>
          </div>
          </div>
          <div className='text-2xl font-bold'>
            <div className='flex justify-start items-center'>
              <svg
                width='83'
                height='83'
                viewBox='0 0 83 83'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M82.2537 41.0414C82.2537 63.708 63.8789 82.0828 41.2123 82.0828C18.5458 82.0828 0.170898 63.708 0.170898 41.0414C0.170898 18.3749 18.5458 0 41.2123 0C63.8789 0 82.2537 18.3749 82.2537 41.0414Z'
                  fill='#38B557'
                  fillOpacity='0.2'
                />
                <path
                  d='M56.2401 41.4119V29.9588C56.2402 29.8142 56.2118 29.6709 56.1565 29.5373C56.1011 29.4037 56.02 29.2823 55.9176 29.1801L50.1499 23.4123C49.9439 23.2061 49.6645 23.0901 49.373 23.0898H28.0241C27.7326 23.0898 27.453 23.2057 27.2468 23.4118C27.0406 23.618 26.9248 23.8976 26.9248 24.1892V58.6346C26.9248 58.9262 27.0406 59.2058 27.2468 59.412C27.453 59.6182 27.7326 59.734 28.0241 59.734H39.7503M34.2536 37.7475H48.9113M34.2536 30.4187H41.5825M34.2536 45.0763H39.7503'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M48.9116 23.0898V29.3193C48.9116 29.6109 49.0274 29.8905 49.2336 30.0967C49.4397 30.3028 49.7193 30.4187 50.0109 30.4187H56.2404M49.4722 50.78L51.1377 47.2493C51.1827 47.1484 51.2559 47.0626 51.3486 47.0025C51.4413 46.9423 51.5494 46.9103 51.6599 46.9103C51.7704 46.9103 51.8785 46.9423 51.9712 47.0025C52.0638 47.0626 52.1371 47.1484 52.1821 47.2493L53.8494 50.78L57.5724 51.3498C58.0506 51.4231 58.2412 52.0387 57.8967 52.3905L55.2015 55.1388L55.8373 59.0194C55.9179 59.5178 55.4177 59.8989 54.9908 59.6625L51.6599 57.8303L48.3289 59.6625C47.9002 59.8989 47.4018 59.5178 47.4825 59.0194L48.1182 55.1388L45.4249 52.3905C45.0768 52.0387 45.2691 51.4231 45.7474 51.3498L49.4722 50.78Z'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <svg
                width='211'
                height='2'
                viewBox='0 0 211 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H210'
                  stroke='#88D39A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeDasharray='4 4'
                />
              </svg>
            </div>
            <div className="px-4 flex flex-col mt-4 gap-2">
            Permit and Applications
            <p className='text-sm font-normal'>
              As soon as you book the order with us, we also initiate the
              necessary applications for prefeasibility approvals from your
              electric utility as well as in the national rooftop solar portal
              for subsidy application. Our team will contact you to collect the
              necessary documents for these applications.
            </p>
          </div>
          </div>
          <div className='text-2xl font-bold'>
            <div className='flex justify-start items-center'>
              <svg
                width='83'
                height='83'
                viewBox='0 0 83 83'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M82.8397 41.0414C82.8397 63.708 64.4648 82.0828 41.7983 82.0828C19.1317 82.0828 0.756836 63.708 0.756836 41.0414C0.756836 18.3749 19.1317 0 41.7983 0C64.4648 0 82.8397 18.3749 82.8397 41.0414Z'
                  fill='#38B557'
                  fillOpacity='0.2'
                />
                <g clipPath='url(#clip0_2891_18349)'>
                  <path
                    d='M34.8392 54.239C35.8111 54.239 36.7431 53.8529 37.4303 53.1657C38.1176 52.4785 38.5036 51.5464 38.5036 50.5746C38.5036 49.6027 38.1176 48.6706 37.4303 47.9834C36.7431 47.2962 35.8111 46.9102 34.8392 46.9102C33.8674 46.9102 32.9353 47.2962 32.2481 47.9834C31.5609 48.6706 31.1748 49.6027 31.1748 50.5746C31.1748 51.5464 31.5609 52.4785 32.2481 53.1657C32.9353 53.8529 33.8674 54.239 34.8392 54.239ZM53.1613 54.239C54.1331 54.239 55.0652 53.8529 55.7524 53.1657C56.4396 52.4785 56.8257 51.5464 56.8257 50.5746C56.8257 49.6027 56.4396 48.6706 55.7524 47.9834C55.0652 47.2962 54.1331 46.9102 53.1613 46.9102C52.1894 46.9102 51.2574 47.2962 50.5702 47.9834C49.8829 48.6706 49.4969 49.6027 49.4969 50.5746C49.4969 51.5464 49.8829 52.4785 50.5702 53.1657C51.2574 53.8529 52.1894 54.239 53.1613 54.239Z'
                    stroke='#033E4D'
                    strokeWidth='3.49333'
                    strokeMiterlimit='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M38.5961 50.5722H47.6655V31.5173C47.6655 31.2257 47.5497 30.9461 47.3436 30.74C47.1374 30.5338 46.8578 30.418 46.5662 30.418H22.0146M30.5344 50.5722H26.7784C26.634 50.5722 26.4911 50.5438 26.3577 50.4886C26.2243 50.4333 26.1031 50.3523 26.001 50.2503C25.899 50.1482 25.818 50.027 25.7627 49.8936C25.7075 49.7602 25.6791 49.6173 25.6791 49.4729V40.4951'
                    stroke='#033E4D'
                    strokeWidth='3.49333'
                    strokeLinecap='round'
                  />
                  <path
                    d='M23.8457 35.9141H31.1745'
                    stroke='#033E4D'
                    strokeWidth='3.49333'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M47.6641 35.9141H57.9427C58.1552 35.9141 58.3632 35.9758 58.5414 36.0915C58.7195 36.2073 58.8604 36.3722 58.9468 36.5663L62.2264 43.9465C62.2889 44.0866 62.3214 44.2383 62.3217 44.3917V49.4724C62.3217 49.6168 62.2933 49.7597 62.238 49.8931C62.1828 50.0265 62.1018 50.1476 61.9997 50.2497C61.8976 50.3518 61.7765 50.4328 61.6431 50.488C61.5097 50.5433 61.3668 50.5717 61.2224 50.5717H57.7412M47.6641 50.5717H49.4963'
                    stroke='#033E4D'
                    strokeWidth='3.49333'
                    strokeLinecap='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2891_18349'>
                    <rect
                      width='43.973'
                      height='43.973'
                      fill='white'
                      transform='translate(20.1816 19.4258)'
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width='211'
                height='2'
                viewBox='0 0 211 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H210'
                  stroke='#88D39A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeDasharray='4 4'
                />
              </svg>
            </div>
            <div className="px-4 flex flex-col mt-4 gap-2">
            Delivery and Installation
            <p className='text-sm font-normal'>
              Once the prefeasibility approval is received from the electric
              utility, we can proceed with the installation of the system. We
              then ask you to make the next milestone payments to proceed with
              the delivery and installation of the system. We also coordinate
              until your plant is commissioned and grid-connected.
            </p>
          </div>
          </div>
          <div className='text-2xl font-bold'>
            <div className='flex justify-start items-center'>
              <svg
                width='83'
                height='83'
                viewBox='0 0 83 83'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M82.4256 41.0414C82.4256 63.708 64.0508 82.0828 41.3842 82.0828C18.7176 82.0828 0.342773 63.708 0.342773 41.0414C0.342773 18.3749 18.7176 0 41.3842 0C64.0508 0 82.4256 18.3749 82.4256 41.0414Z'
                  fill='#38B557'
                  fillOpacity='0.2'
                />
                <path
                  d='M52.7471 56.0683L59.7534 49.062C59.9597 48.856 60.0756 48.5766 60.0759 48.2851V38.6624C60.0759 37.9335 59.7863 37.2344 59.2709 36.719C58.7555 36.2036 58.0565 35.9141 57.3276 35.9141C56.5987 35.9141 55.8996 36.2036 55.3842 36.719C54.8688 37.2344 54.5793 37.9335 54.5793 38.6624V46.9073'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M52.7469 48.7395L54.319 47.1675C54.4016 47.085 54.4671 46.987 54.5117 46.8792C54.5564 46.7713 54.5793 46.6557 54.5791 46.539C54.5789 46.3743 54.5328 46.2128 54.4461 46.0727C54.3594 45.9326 54.2355 45.8194 54.0881 45.7457L53.2764 45.3408C52.5888 44.9969 51.8104 44.8781 51.0515 45.0011C50.2926 45.1241 49.5916 45.4826 49.0477 46.026L47.4079 47.6658C46.7206 48.3529 46.3344 49.2848 46.3342 50.2566V56.0683M30.7605 56.0683L23.7541 49.062C23.5479 48.856 23.4319 48.5766 23.4316 48.2851V38.6624C23.4316 37.9335 23.7212 37.2344 24.2366 36.719C24.752 36.2036 25.4511 35.9141 26.18 35.9141C26.9088 35.9141 27.6079 36.2036 28.1233 36.719C28.6387 37.2344 28.9283 37.9335 28.9283 38.6624V46.9073'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M30.7599 48.7443L29.1879 47.1723C29.1054 47.0897 29.04 46.9917 28.9953 46.8839C28.9507 46.7761 28.9277 46.6605 28.9277 46.5438C28.9277 46.2085 29.1183 45.9025 29.4188 45.7505L30.2304 45.3455C30.9181 45.0017 31.6964 44.8829 32.4554 45.0059C33.2143 45.1288 33.9153 45.4874 34.4592 46.0308L36.099 47.6706C36.7862 48.3577 37.1725 49.2896 37.1727 50.2614V56.0731M44.8075 41.4155H38.6989V37.1409H34.4244V31.0324H38.6989V26.7578H44.8075V31.0324H49.082V37.1409H44.8075V41.4155Z'
                  stroke='#033E4D'
                  strokeWidth='3.49333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className="px-4 flex flex-col mt-4 gap-2">
            Lifetime Support
            <p className='text-sm font-normal'>
              Now the plant is live and generating power. But we wont disappear
              after this. You can reach our helpline for any troubleshooting or
              issues. You can also opt in for our monthly plant performance
              reports.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
