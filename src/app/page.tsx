/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupDiscount, setPopupDiscount] = useState(false);
  const [isPriceSummary, setPriceSummary] = useState(false);
  const [activeTab, setActiveTab] = useState('specifications');

  const showProductDetails = () => {
    setPopupVisible(true);
  };

  const hideProductDetails = () => {
    setPopupVisible(false);
  };

  const showProductSummary = () => {
    setPriceSummary(true);
  };
  const showProductDiscount = () => {
    setPopupDiscount(true);
  };

  const hideProductSummary = () => {
    setPriceSummary(false);
  };
  const hideProductDiscount = () => {
    setPopupDiscount(false);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto'>
          <div className='flex lg:flex-row flex-col justify-center xl:gap-0 gap-4 items-start bg-[#fafbf]'>
            <div className='lg:w-1/2 w-full flex flex-col lg:gap-8'>
              <img
                src='/solar.webp'
                className='rounded-md shadow-md'
                alt='solar'
              />
              <img
                src='/solar1.webp'
                className='rounded-md shadow-md lg:block hidden'
                alt='solar'
              />
              <img
                src='/solar2.webp'
                className='rounded-md shadow-md lg:block hidden'
                alt='solar'
              />

              <div className='h-[6px] lg:hidden bg-[#D9D9D9]'></div>

              {/* MobileProductCard */}
              <div className='lg:hidden'>
                <div className='w-full relative p-2'>
                  <div className='p-2 bg-[#033E4D] text-white font-semibold text-sm left-4 w-40 rounded-b-md text-center absolute top-0'>
                    Premium
                  </div>
                  <div className='w-full flex justify-end px-2 items-center'>
                    <svg
                      width='30'
                      height='30'
                      className=' cursor-pointer'
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
                    <div className='product-name text-lg mt-4 font-bold text-[#033E4D]'>
                      3 kW on-grid solar power plant | Monoperc bifacial panels
                    </div>
                    <div className='flex items-end justify-between'>
                      <div className='solar-name text-xl font-bold text-[#033E4D]'>
                        TCM Solar
                        <div className='flex gap-2'>
                          <svg
                            width='28'
                            height='28'
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
                            width='28'
                            height='28'
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
                            width='28'
                            height='28'
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
                            width='28'
                            height='28'
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
                            width='28'
                            height='28'
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

                      <div className='relative w-14 h-14 flex justify-center items-center'>
                        <svg
                          viewBox='0 0 47 47'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-11 h-11 absolute'
                        >
                          <circle
                            cx='23.3945'
                            cy='23.3954'
                            r='23.3954'
                            fill='#38B557'
                            fillOpacity='0.2'
                          />
                        </svg>
                        <svg
                          className='w-8 h-8 absolute'
                          viewBox='0 0 34 34'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M32.5001 17.0102H20.9486C20.9493 16.9829 20.9497 16.9556 20.9498 16.9283L20.9498 16.9222C20.9497 16.8395 20.9469 16.7571 20.9415 16.6749H32.5001V17.0102ZM8.86954 8.30541L14.5729 14.0088C14.488 14.0822 14.4062 14.1595 14.3276 14.2404L8.6327 8.54212L8.86954 8.30541ZM20.0039 19.4398L25.4031 24.8399L25.1665 25.0764L19.7734 19.6834C19.8537 19.6056 19.9306 19.5243 20.0039 19.4398ZM19.8918 14.2697C19.8148 14.1884 19.7342 14.1104 19.6503 14.0361L25.2738 8.41269L25.5114 8.65018L19.8918 14.2697ZM17.1856 13.0707C17.1547 13.0699 17.1237 13.0696 17.0927 13.0696L17.0919 13.0696C17.0113 13.0698 16.9308 13.0725 16.8504 13.0776V1.20885H17.1856V13.0707ZM13.248 16.6749C13.2428 16.7547 13.2401 16.8348 13.2399 16.9151L13.2399 16.9155C13.2399 16.9471 13.2402 16.9786 13.241 17.0102H1.53697V16.6749H13.248ZM14.2118 19.4755C14.2856 19.5585 14.3631 19.6383 14.4438 19.7146L8.97711 25.1805L8.74027 24.9436L14.2118 19.4755ZM16.8504 20.7612C16.9307 20.7664 17.0114 20.769 17.0922 20.7692L17.0953 20.7692C17.1255 20.7692 17.1556 20.7688 17.1856 20.768V32.172H16.8504V20.7612Z'
                            fill='#38B557'
                            stroke='#38B557'
                            strokeWidth='2.39426'
                          />
                        </svg>

                        <img
                          src='/zircle.png'
                          alt='xyz'
                          className='lg:w-32 absolute'
                        />
                      </div>
                    </div>
                    <div className='flex shadow-lg bg-[#38B55733] mt-2 py-4 px-4 justify-between rounded-md'>
                      <div className='solar-name w-1/2 text-lg font-bold text-[#033E4D]'>
                        ₹ 3,20,000
                        <div
                          onClick={showProductSummary}
                          className='flex cursor-pointer justify-start items-center gap-2'
                        >
                          <span className='text-sm font-normal underline'>
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
                      <div className='text-sm w-1/2 flex flex-col justify-end items-end font-normal text-[#033E4D]'>
                        Available Subsidy
                        <div className='text-lg font-bold text-[#38B557]'>
                          ₹ 78,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-[6px] lg:hidden mt-10 mb-4 bg-[#D9D9D9]'></div>

                <div className='text-base mx-2 mb-2 font-semibold text-[#033E4D] flex gap-2 justify-start items-center'>
                  <svg
                    width='50'
                    height='50'
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
                    <span className=' text-lg font-bold text-[#38B557]'>
                      ₹ 2,500
                    </span>
                    <span className='text-base font-medium text-end'>
                      {' '}
                      onwards
                    </span>
                  </div>
                </div>

                <div className='flex gap-2 mx-2'>
                  <div className='w-1/2 border border-[#033E4D] text-[#033E4D] text-xs font-medium flex gap-2 rounded-lg p-2'>
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
                  <div className='w-1/2 border text-xs border-[#033E4D] text-[#033E4D] font-medium flex gap-2 rounded-lg p-2'>
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

                <div className='h-[1px] lg:hidden bg-[#D9D9D9] mt-4 mb-4'></div>
                <div
                  onClick={showProductDiscount}
                  className='text-base font-bold cursor-pointer text-[#033E4D] flex justify-between items-center mx-2 gap-4'
                >
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

                <div className='h-[6px] lg:hidden bg-[#D9D9D9] mt-4 mb-8'></div>

                <div className='flex gap-4 mx-2'>
                  <svg
                    width='50'
                    height='50'
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
                  <div className='text-sm font-bold text-[#033E4D]'>
                    <span className='text-[#38B557]'>Fast Delivery</span>{' '}
                    Delivery in 2 weeks
                    <div className='text-sm'>
                      Project completion in 4-6 weeks
                    </div>
                    <a className='text-xs font-semibold underline text-[#38B557]'>
                      See complete installation process and timelines
                    </a>
                  </div>
                </div>
                <div className='h-[1px] lg:hidden bg-[#D9D9D9] mt-8 mb-8'></div>
                <div className='flex mx-2'>
                  <input
                    type='text'
                    name=''
                    className=' outline-none placeholder-red-600 w-3/5 text-sm px-2'
                    placeholder='Check availability in your area'
                    id=''
                  />
                  <div className='text-xs py-1 flex border px-4 justify-between items-center border-[#396571] rounded-md text-[#033E4D] font-semibold gap-2 bg-[#c5dae0]'>
                    Enter pincode
                    <svg
                      width='16'
                      height='16'
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

              <div className='h-[6px] lg:hidden bg-[#D9D9D9] mt-8 mb-4'></div>

              {/* WhyBuy */}
              <div>
                <div className='flex flex-col lg:gap-4 gap-2'>
                  <div className='h-[1px] bg-[#033E4D] lg:block hidden'></div>
                  <div className='lg:text-3xl lg:mx-auto px-2 text-2xl font-bold w-full text-[#033E4D]'>
                    Who should buy this?
                  </div>
                  <div className='md:text-lg lg:mx-auto px-2 text-base font-Medium w-full text-[#033E4D]'>
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
                  <div className='h-[1px] bg-[#D9D9D9] mt-8 mb-4 lg:hidden'></div>
                  <div className='flex lg:mx-auto px-2 w-full'>
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
                        <div className='lg:text-base text-xs font-normal'>
                          ANNUAL SAVINGS
                        </div>
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
                        <div className='lg:text-base text-xs font-normal'>
                          ANNUAL GENERATION
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='h-[6px] bg-[#D9D9D9] mt-8 mb-4 lg:hidden'></div>

                  <div className='h-[1px] bg-[#033E4D] lg:block hidden'></div>
                </div>
              </div>
            </div>

            {/* DesktopCard */}
            <div className='lg:w-1/2 w-full z-10 sticky top-0 lg:flex hidden justify-center items-center'>
              <div className='border xl:w-4/5 w-full h-screen relative border-[#396571] rounded-md p-4'>
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
                  <div className='flex shadow-lg bg-[#38B55733] py-4 px-4 justify-between rounded-md'>
                    <div className='solar-name w-1/2 text-xl font-bold text-[#033E4D]'>
                      ₹ 3,20,000
                      <div
                        onClick={showProductSummary}
                        className='flex justify-start items-center gap-2 cursor-pointer'
                      >
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

                  <div
                    onClick={showProductDiscount}
                    className='text-lg cursor-pointer font-bold text-[#033E4D] flex gap-4'
                  >
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
        <div className='w-full'>
          <div className='h-[1px] bg-[#396571] mt-10 lg:block hidden'></div>

          {/* product Overview */}
          <div className='flex lg:justify-center justify-start items-center'>
            <div className='flex flex-col gap-4 xl:max-w-[1340px] lg:mt-10 mt-6 2xl:max-w-[1470px] lg:text-3xl text-xl text-[#033E4D] font-bold xl-mx-auto mx-2'>
              Product Overview
              <div className='lg:text-xl text-lg font-bold text-[#033E4D] flex justify-between lg:justify-start gap-4'>
                <div>
                  Zircle Score: <span className='text-[#38B557]'>9.4/10</span>
                </div>
                <div className='w-[154px] lg:h-9 h-8 rounded-md bg-[#033E4D] text-white lg:text-base flex justify-center items-center text-xs font-bold'>
                  Premium
                </div>
              </div>
              <div className='grid lg:grid-cols-3 lg:gap-0 gap-4 mt-8'>
                <div className='flex lg:justify-center justify-start items-center gap-4'>
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
                  <div className='lg:text-xl font-bold text-sm text-[#033E4D]'>
                    <span className='text-[#6A8B94]'>PANEL </span>
                    <div className='text-lg font-normal'>
                      Monoperc Bifacial 545-565 Wp panels - 9 nos
                    </div>
                    <div className='lg:text-xl text-sm font-bold'>
                      Adani/ Waree/ Renewsys
                    </div>
                  </div>
                </div>
                <div className='flex lg:justify-center justify-start items-center gap-4'>
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

                  <div className='lg:text-xl font-bold text-sm text-[#033E4D]'>
                    <span className='text-[#6A8B94]'>INVERTER</span>
                    <div className='text-lg font-normal'>
                      On-grid string inverter 5 kW 3-phase
                    </div>
                    <div className='lg:text-xl text-sm font-bold'>Growwatt</div>
                  </div>
                </div>
                <div className='flex lg:justify-center justify-start items-center gap-4'>
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

                  <div className='lg:text-xl font-bold text-sm text-[#033E4D]'>
                    <span className='text-[#6A8B94]'>
                      PANEL MOUNTING STRUCTURE{' '}
                    </span>
                    <div className='text-lg font-normal'>
                      Elevated 6ft-8ft structure
                    </div>
                    <div className='lg:text-xl text-sm font-bold'>GI tubes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[1px] bg-[#D9D9D9] mt-10'></div>

          <div className='flex justify-center items-center'>
            <div className='text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl:mx-auto mx-2 lg:text-2xl lg:mt-10 mt-8 text-lg font-bold items-center justify-start flex gap-4'>
              What’s included? See all product details
              <svg
                className='lg:w-[46px] lg:h-[46px] w-[30px] h-[30px] cursor-pointer'
                onClick={showProductDetails}
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

          {/* Warranty */}

          <div className='flex flex-col justify-center items-center lg:mx-auto mx-2'>
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
          </div>

          <div className='h-[1px] bg-[#D9D9D9] mt-10'></div>

          <div className='flex justify-center items-center'>
            <div className='text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl-mx-auto mx-2 lg:text-2xl mt-10 text-lg font-bold items-center justify-start flex gap-4'>
              See warranty and service details
              <svg
                className='lg:w-[46px] lg:h-[46px] w-[30px] h-[30px] cursor-pointer'
                onClick={showProductDetails}
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

          {/* AddsOn */}
          <div className='flex justify-center items-center'>
            <div className='lg:text-3xl text-xl flex flex-col gap-8 font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] w-full xl:mx-auto mx-2 '>
              Benefits and add-ons
              <div className='lg:w-3/4 w-full flex gap-4'>
                <div className='lg:text-base text-xs lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      viewBox='0 0 33 32'
                      className='lg:w-16 lg:h-16 w-10 h-10 absolute'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.9287 2.64016C16.0022 2.54659 16.0959 2.47093 16.2029 2.4189C16.3098 2.36688 16.4272 2.33984 16.5462 2.33984C16.6651 2.33984 16.7825 2.36688 16.8895 2.4189C16.9964 2.47093 17.0902 2.54659 17.1636 2.64016L19.53 5.64886C19.6261 5.77123 19.7563 5.8623 19.9042 5.91051C20.0521 5.95873 20.211 5.9619 20.3607 5.91964L24.0431 4.87575C24.1574 4.84317 24.2777 4.83699 24.3947 4.85767C24.5118 4.87836 24.6227 4.92538 24.7189 4.99517C24.8152 5.06497 24.8943 5.15572 24.9504 5.26058C25.0064 5.36543 25.0379 5.48165 25.0425 5.60046L25.1864 9.42675C25.1924 9.58218 25.2445 9.73231 25.3361 9.85808C25.4276 9.98385 25.5544 10.0796 25.7005 10.1331L29.2939 11.4544C29.4055 11.4953 29.5063 11.561 29.5887 11.6465C29.6712 11.7321 29.7331 11.8353 29.7699 11.9483C29.8067 12.0613 29.8174 12.1811 29.8011 12.2988C29.7848 12.4165 29.742 12.529 29.6759 12.6277L27.5436 15.8078C27.457 15.9371 27.4108 16.0891 27.4108 16.2447C27.4108 16.4003 27.457 16.5524 27.5436 16.6816L29.6759 19.8617C29.742 19.9605 29.7848 20.0729 29.8011 20.1906C29.8174 20.3083 29.8067 20.4282 29.7699 20.5412C29.7331 20.6542 29.6712 20.7574 29.5887 20.8429C29.5063 20.9285 29.4055 20.9942 29.2939 21.0351L25.7005 22.3563C25.5547 22.4101 25.4281 22.5059 25.3368 22.6317C25.2455 22.7574 25.1936 22.9074 25.1877 23.0627L25.0425 26.889C25.0379 27.0078 25.0064 27.124 24.9504 27.2289C24.8943 27.3337 24.8152 27.4245 24.7189 27.4943C24.6227 27.5641 24.5118 27.6111 24.3947 27.6318C24.2777 27.6525 24.1574 27.6463 24.0431 27.6137L20.3607 26.5698C20.2109 26.5271 20.0518 26.53 19.9037 26.5779C19.7555 26.6259 19.625 26.7169 19.5287 26.8393L17.1649 29.8493C17.0915 29.9429 16.9977 30.0185 16.8908 30.0706C16.7838 30.1226 16.6664 30.1496 16.5475 30.1496C16.4285 30.1496 16.3111 30.1226 16.2042 30.0706C16.0972 30.0185 16.0035 29.9429 15.93 29.8493L13.5636 26.8406C13.4676 26.7182 13.3373 26.6272 13.1895 26.5789C13.0416 26.5307 12.8827 26.5276 12.733 26.5698L9.05057 27.6137C8.93622 27.6463 8.81597 27.6525 8.69889 27.6318C8.58181 27.6111 8.47096 27.5641 8.3747 27.4943C8.27845 27.4245 8.19931 27.3337 8.14326 27.2289C8.08721 27.124 8.05572 27.0078 8.05115 26.889L7.90726 23.0627C7.90121 22.9073 7.84911 22.7571 7.75758 22.6314C7.66605 22.5056 7.53921 22.4099 7.39316 22.3563L3.79972 21.0351C3.68817 20.9942 3.58736 20.9285 3.5049 20.8429C3.42244 20.7574 3.36049 20.6542 3.3237 20.5412C3.28692 20.4282 3.27628 20.3083 3.29257 20.1906C3.30886 20.0729 3.35166 19.9605 3.41775 19.8617L5.55001 16.6816C5.63662 16.5524 5.68286 16.4003 5.68286 16.2447C5.68286 16.0891 5.63662 15.9371 5.55001 15.8078L3.41775 12.6277C3.35166 12.529 3.30886 12.4165 3.29257 12.2988C3.27628 12.1811 3.28692 12.0613 3.3237 11.9483C3.36049 11.8353 3.42244 11.7321 3.5049 11.6465C3.58736 11.561 3.68817 11.4953 3.79972 11.4544L7.39316 10.1331C7.53896 10.0794 7.66553 9.98355 7.75681 9.8578C7.8481 9.73205 7.90001 9.58203 7.90595 9.42675L8.05115 5.60046C8.05572 5.48165 8.08721 5.36543 8.14326 5.26058C8.19931 5.15572 8.27845 5.06497 8.3747 4.99517C8.47096 4.92538 8.58181 4.87836 8.69889 4.85767C8.81597 4.83699 8.93622 4.84317 9.05057 4.87575L12.733 5.91964C12.8827 5.9619 13.0416 5.95873 13.1895 5.91051C13.3373 5.8623 13.4676 5.77123 13.5636 5.64886L15.9313 2.64016H15.9287Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                      />
                      <path
                        d='M12.6221 16.2452L15.2383 18.8614L20.4709 13.6289'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <img
                      src='/circle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                  80-point check quality inspection
                </div>
                <div className='lg:text-base text-xs lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      className='lg:w-16 lg:h-16 w-10 h-10 absolute'
                      viewBox='0 0 33 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.9953 14.4213L4.74681 23.6698C4.50356 23.9128 4.31058 24.2013 4.17892 24.5189C4.04726 24.8365 3.97949 25.177 3.97949 25.5208C3.97949 25.8646 4.04726 26.2051 4.17892 26.5227C4.31058 26.8403 4.50356 27.1288 4.74681 27.3718C5.23743 27.8623 5.90277 28.1378 6.59651 28.1378C7.29025 28.1378 7.95558 27.8623 8.4462 27.3718L17.6947 18.1207M23.3393 18.5982L28.4122 23.6711C28.9027 24.1617 29.1782 24.8271 29.1782 25.5208C29.1782 26.2145 28.9027 26.8799 28.4122 27.3705C27.9216 27.861 27.2563 28.1365 26.5625 28.1365C25.8688 28.1365 25.2034 27.861 24.7128 27.3705L16.5906 19.2496M9.65623 8.26915L6.87906 9.1927L4.10582 4.56845L5.95552 2.71875L10.5811 5.4933L9.65623 8.26915ZM9.65623 8.26915L13.3582 11.9712'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M13.9958 14.4226C12.8918 11.6062 13.1076 7.91074 15.3838 5.63459C17.6599 3.35844 21.859 2.86004 24.1705 4.24797L20.1938 8.22469L19.8236 12.2943L23.8932 11.9254L27.8699 7.94737C29.2591 10.2601 28.7594 14.4592 26.4833 16.7341C24.2071 19.0102 20.513 19.2261 17.6966 18.122'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <img
                      src='/circle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                  Up to 5 years of Zircle maintenance
                </div>
                <div className='lg:text-base text-xs lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      className='lg:w-16 lg:h-16 w-10 h-10 absolute'
                      viewBox='0 0 33 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M27.0112 14.9377C27.0112 12.1622 25.9086 9.50038 23.946 7.5378C21.9834 5.57522 19.3216 4.47266 16.5461 4.47266C13.7706 4.47266 11.1088 5.57522 9.1462 7.5378C7.18362 9.50038 6.08105 12.1622 6.08105 14.9377'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M27.0112 24.0931V24.7472C27.0112 25.4411 26.7356 26.1065 26.2449 26.5972C25.7543 27.0878 25.0888 27.3635 24.395 27.3635H19.8165M3.46484 20.7417V18.2876C3.46493 17.7042 3.66002 17.1376 4.01911 16.6778C4.37819 16.2179 4.88066 15.8913 5.44666 15.7499L7.72281 15.1795C7.83847 15.1507 7.95918 15.1486 8.07576 15.1734C8.19235 15.1982 8.30175 15.2492 8.39568 15.3226C8.48961 15.396 8.56559 15.4898 8.61787 15.5969C8.67014 15.704 8.69733 15.8217 8.69737 15.9408V23.0872C8.69758 23.2066 8.67052 23.3245 8.61826 23.4319C8.566 23.5393 8.48991 23.6334 8.3958 23.707C8.30168 23.7805 8.19202 23.8316 8.07517 23.8564C7.95832 23.8811 7.83736 23.8789 7.72151 23.8498L5.44536 23.2808C4.8796 23.139 4.37742 22.8123 4.01859 22.3525C3.65976 21.8928 3.46486 21.3262 3.46484 20.743V20.7417ZM29.6275 20.7417V18.2876C29.6274 17.7042 29.4323 17.1376 29.0732 16.6778C28.7141 16.2179 28.2117 15.8913 27.6457 15.7499L25.3695 15.1795C25.2539 15.1507 25.1332 15.1486 25.0166 15.1734C24.9 15.1982 24.7906 15.2492 24.6966 15.3226C24.6027 15.396 24.5267 15.4898 24.4745 15.5969C24.4222 15.704 24.395 15.8217 24.395 15.9408V23.0872C24.3948 23.2065 24.4218 23.3242 24.474 23.4315C24.5262 23.5388 24.6022 23.6328 24.6961 23.7063C24.7901 23.7798 24.8996 23.831 25.0162 23.8558C25.1329 23.8807 25.2537 23.8786 25.3695 23.8498L27.6457 23.2808C28.2117 23.1393 28.7141 22.8127 29.0732 22.3529C29.4323 21.8931 29.6274 21.3264 29.6275 20.743V20.7417Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                      />
                      <path
                        d='M18.5087 29.3267H14.5843C14.0639 29.3267 13.5648 29.12 13.1968 28.752C12.8288 28.384 12.6221 27.8849 12.6221 27.3645C12.6221 26.8441 12.8288 26.345 13.1968 25.9771C13.5648 25.6091 14.0639 25.4023 14.5843 25.4023H18.5087C19.0291 25.4023 19.5282 25.6091 19.8961 25.9771C20.2641 26.345 20.4709 26.8441 20.4709 27.3645C20.4709 27.8849 20.2641 28.384 19.8961 28.752C19.5282 29.12 19.0291 29.3267 18.5087 29.3267Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                      />
                    </svg>

                    <img
                      src='/circle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                  Life long service support
                </div>
                <div className='lg:text-base text-xs lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      className='lg:w-16 lg:h-16 w-10 h-10 absolute'
                      viewBox='0 0 45 45'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M33.7471 37.0683L40.7534 30.062C40.9597 29.856 41.0756 29.5766 41.0759 29.2851V19.6624C41.0759 18.9335 40.7863 18.2344 40.2709 17.719C39.7555 17.2036 39.0565 16.9141 38.3276 16.9141C37.5987 16.9141 36.8996 17.2036 36.3842 17.719C35.8688 18.2344 35.5793 18.9335 35.5793 19.6624V27.9073'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M33.7469 29.7395L35.319 28.1675C35.4016 28.085 35.4671 27.987 35.5117 27.8792C35.5564 27.7713 35.5793 27.6557 35.5791 27.539C35.5789 27.3743 35.5328 27.2128 35.4461 27.0727C35.3594 26.9326 35.2355 26.8194 35.0881 26.7457L34.2764 26.3408C33.5888 25.9969 32.8104 25.8781 32.0515 26.0011C31.2926 26.1241 30.5916 26.4826 30.0477 27.026L28.4079 28.6658C27.7206 29.3529 27.3344 30.2848 27.3342 31.2566V37.0683M11.7605 37.0683L4.75411 30.062C4.54789 29.856 4.4319 29.5766 4.43164 29.2851V19.6624C4.43164 18.9335 4.72119 18.2344 5.2366 17.719C5.75201 17.2036 6.45105 16.9141 7.17995 16.9141C7.90885 16.9141 8.60789 17.2036 9.1233 17.719C9.63871 18.2344 9.92826 18.9335 9.92826 19.6624V27.9073'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M11.7599 29.7443L10.1879 28.1723C10.1054 28.0897 10.04 27.9917 9.99531 27.8839C9.95067 27.7761 9.92771 27.6605 9.92773 27.5438C9.92773 27.2085 10.1183 26.9025 10.4188 26.7505L11.2304 26.3455C11.9181 26.0017 12.6964 25.8829 13.4554 26.0059C14.2143 26.1288 14.9153 26.4874 15.4592 27.0308L17.099 28.6706C17.7862 29.3577 18.1725 30.2896 18.1727 31.2614V37.0731M25.8075 22.4155H19.6989V18.1409H15.4244V12.0324H19.6989V7.75781H25.8075V12.0324H30.082V18.1409H25.8075V22.4155Z'
                        stroke='#38B557'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <img
                      src='/circle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                  Plant performance monitoring
                </div>
              </div>
              <div className='flex lg:flex-row flex-col gap-4 mt-8'>
                <div className='border border-[#033E4D] p-4 flex items-center lg:w-1/2 rounded-md justify-between w-full'>
                  <div className='w-3/5 lg:text-2xl text-lg'>
                    Zircle Quality Assurance
                    <div className='flex items-center gap-4 w-full lg:text-lg font-medium text-xs'>
                      <p className='w-3/4 '>Our promise on quality</p>
                      <svg
                        className='lg:w-14 lg:h-14 h-6 w-6 cursor-pointer'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_2880_18261)'>
                          <path
                            d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                            stroke='#396571'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_2880_18261'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      className='lg:w-16 lg:h-16 w-8 h-8 absolute'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M32.5001 17.0102H20.9486C20.9493 16.9829 20.9497 16.9556 20.9498 16.9283L20.9498 16.9222C20.9497 16.8395 20.9469 16.7571 20.9415 16.6749H32.5001V17.0102ZM8.86954 8.30541L14.5729 14.0088C14.488 14.0822 14.4062 14.1595 14.3276 14.2404L8.6327 8.54212L8.86954 8.30541ZM20.0039 19.4398L25.4031 24.8399L25.1665 25.0764L19.7734 19.6834C19.8537 19.6056 19.9306 19.5243 20.0039 19.4398ZM19.8918 14.2697C19.8148 14.1884 19.7342 14.1104 19.6503 14.0361L25.2738 8.41269L25.5114 8.65018L19.8918 14.2697ZM17.1856 13.0707C17.1547 13.0699 17.1237 13.0696 17.0927 13.0696L17.0919 13.0696C17.0113 13.0698 16.9308 13.0725 16.8504 13.0776V1.20885H17.1856V13.0707ZM13.248 16.6749C13.2428 16.7547 13.2401 16.8348 13.2399 16.9151L13.2399 16.9155C13.2399 16.9471 13.2402 16.9786 13.241 17.0102H1.53697V16.6749H13.248ZM14.2118 19.4755C14.2856 19.5585 14.3631 19.6383 14.4438 19.7146L8.97711 25.1805L8.74027 24.9436L14.2118 19.4755ZM16.8504 20.7612C16.9307 20.7664 17.0114 20.769 17.0922 20.7692L17.0953 20.7692C17.1255 20.7692 17.1556 20.7688 17.1856 20.768V32.172H16.8504V20.7612Z'
                        fill='#38B557'
                        stroke='#38B557'
                        strokeWidth='2.39426'
                      />
                    </svg>

                    <img
                      src='/zircle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                </div>
                <div className='border border-[#033E4D] p-4 flex items-center lg:w-1/2 rounded-md justify-between w-full'>
                  <div className='w-3/5 lg:text-2xl text-lg'>
                    Zircle Service Assurance
                    <div className='flex items-center gap-4 w-full lg:text-lg font-medium text-xs'>
                      <p className='w-3/4'>
                        How can you ensure long-term service with Zircle?
                      </p>
                      <svg
                        className='lg:w-14 lg:h-14 h-6 w-6 cursor-pointer'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_2880_18261)'>
                          <path
                            d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                            stroke='#396571'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_2880_18261'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className='relative lg:w-28 lg:h-28 w-16 h-16 flex justify-center items-center'>
                    <svg
                      viewBox='0 0 47 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='lg:w-[90px] lg:h-[90px] w-12 h-12 absolute'
                    >
                      <circle
                        cx='23.3945'
                        cy='23.3954'
                        r='23.3954'
                        fill='#38B557'
                        fillOpacity='0.2'
                      />
                    </svg>
                    <svg
                      className='lg:w-16 lg:h-16 w-8 h-8 absolute'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M32.5001 17.0102H20.9486C20.9493 16.9829 20.9497 16.9556 20.9498 16.9283L20.9498 16.9222C20.9497 16.8395 20.9469 16.7571 20.9415 16.6749H32.5001V17.0102ZM8.86954 8.30541L14.5729 14.0088C14.488 14.0822 14.4062 14.1595 14.3276 14.2404L8.6327 8.54212L8.86954 8.30541ZM20.0039 19.4398L25.4031 24.8399L25.1665 25.0764L19.7734 19.6834C19.8537 19.6056 19.9306 19.5243 20.0039 19.4398ZM19.8918 14.2697C19.8148 14.1884 19.7342 14.1104 19.6503 14.0361L25.2738 8.41269L25.5114 8.65018L19.8918 14.2697ZM17.1856 13.0707C17.1547 13.0699 17.1237 13.0696 17.0927 13.0696L17.0919 13.0696C17.0113 13.0698 16.9308 13.0725 16.8504 13.0776V1.20885H17.1856V13.0707ZM13.248 16.6749C13.2428 16.7547 13.2401 16.8348 13.2399 16.9151L13.2399 16.9155C13.2399 16.9471 13.2402 16.9786 13.241 17.0102H1.53697V16.6749H13.248ZM14.2118 19.4755C14.2856 19.5585 14.3631 19.6383 14.4438 19.7146L8.97711 25.1805L8.74027 24.9436L14.2118 19.4755ZM16.8504 20.7612C16.9307 20.7664 17.0114 20.769 17.0922 20.7692L17.0953 20.7692C17.1255 20.7692 17.1556 20.7688 17.1856 20.768V32.172H16.8504V20.7612Z'
                        fill='#38B557'
                        stroke='#38B557'
                        strokeWidth='2.39426'
                      />
                    </svg>

                    <img
                      src='/zircle.png'
                      alt='xyz'
                      className='lg:w-32 absolute'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[4px] bg-[#D9D9D9] lg:mb-10 mb-4 mt-10'></div>

          {/* SimilarProduct */}
          <div>
            <div className='lg:text-3xl w-full flex flex-col lg:gap-8 gap-3 text-xl font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto px-2'>
              Compare with similar solutions
              <div className='flex'>
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
              </div>
            </div>
          </div>

          <div className='h-[4px] bg-[#D9D9D9] lg:mb-10 mb-4 mt-10'></div>

          {/* CustomerReview */}
          <div>
            <div className='lg:text-3xl w-full flex flex-col lg:gap-4 gap-2 text-xl font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto px-2'>
              Customer reviews
              <div className='flex gap-2 mt-4'>
                <svg
                  className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                  className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                  className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                  className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                  className='lg:h-[30px] lg:w-[33px] w-6 h-6'
                  viewBox='0 0 33 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                    fill='#38B557'
                  />
                </svg>
              </div>
              <div className='lg:text-lg font-normal text-sm text-[#6A8B94]'>
                Review for 5 kW on-grid
              </div>
              <div className='lg:text-lg text-sm font-normal'>
                We got the solar system installed from Zircle. The experience
                was completely hassle free and at no point did we face any
                issues. The quality of installation was quite good as well and
                with the quality inspection report that they do, we were assured
                we were in the right hands. The team is helpful, knowledgeable
                and extremely professional. Great job!
              </div>
              <div className='lg:text-xl text-sm'>Suraj Tyagi, Ghaziabad</div>
            </div>
          </div>

          <div className='h-[4px] bg-[#D9D9D9] lg:mb-10 mb-4 mt-10'></div>

          {/* JourneyToBuy */}
          <div>
            <div className='lg:mt-10 flex flex-col justify-center items-center xl:mx-auto mx-2'>
              <div className='lg:text-3xl text-xl font-bold text-[#033E4D] w-full xl:max-w-[1340px] lg:mt-10 mt-4 mb-10 2xl:max-w-[1470px] mx-auto'>
                Installation process
              </div>
              <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 lg:gap-0 gap-4 w-full xl:max-w-[1340px] text-[#033E4D] 2xl:max-w-[14700px]'>
                <div className='lg:text-2xl text-sm font-bold'>
                  <div className='flex justify-start items-center'>
                    <svg
                      className='lg:h-[83px] lg:w-[83px w-[60px] h-[60px]'
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
                      className='lg:block hidden'
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
                  <div className='lg:px-4 flex flex-col mt-4 gap-2'>
                    Site Visit
                    <p className='md:text-sm text-xs font-normal'>
                      Once you book an order, our team will reach out to you
                      within 24 hours to schedule a detailed site assessment.
                    </p>
                  </div>
                </div>
                <div className='lg:text-2xl text-sm font-bold'>
                  <div className='flex justify-start items-center'>
                    <svg
                      className='lg:h-[83px] lg:w-[83px] w-[60px] h-[60px]'
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
                      className='lg:block hidden'
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
                  <div className='lg:px-4 flex flex-col mt-4 gap-2'>
                    Final Design of System
                    <p className='md:text-sm text-xs font-normal'>
                      Based on the detailed site assessment, we will share the
                      final design of the system with you.
                    </p>
                  </div>
                </div>
                <div className='lg:text-2xl text-sm font-bold'>
                  <div className='flex justify-start items-center'>
                    <svg
                      className='lg:h-[83px] lg:w-[83px] w-[60px] h-[60px]'
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
                      className='lg:block hidden'
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
                  <div className='lg:px-4 flex flex-col mt-4 gap-2'>
                    Permit and Applications
                    <p className='md:text-sm text-xs font-normal'>
                      We also initiate the necessary applications for
                      prefeasibility approvals from your electric utility as
                      well as in the national rooftop solar portal for subsidy
                      application.
                    </p>
                  </div>
                </div>
                <div className='lg:text-2xl text-sm font-bold'>
                  <div className='flex justify-start items-center'>
                    <svg
                      className='lg:h-[83px] lg:w-[83px] w-[60px] h-[60px]'
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
                      className='lg:block hidden'
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
                  <div className='lg:px-4 flex flex-col mt-4 gap-2'>
                    Delivery and Installation
                    <p className='md:text-sm text-xs font-normal'>
                      Once the prefeasibility approval is received from the
                      electric utility, we can proceed with the installation of
                      the system. We then ask you to make the next milestone
                      payments to proceed with the delivery and installation of
                      the system. We also coordinate until your plant is
                      commissioned and grid-connected.
                    </p>
                  </div>
                </div>
                <div className='lg:text-2xl text-sm font-bold'>
                  <div className='flex justify-start items-center'>
                    <svg
                      className='lg:h-[73px] lg:w-[73px] w-[60px] h-[60px]'
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
                  <div className='lg:px-4 flex flex-col mt-4 gap-2'>
                    Lifetime Support
                    <p className='md:text-sm text-xs font-normal'>
                      Now the plant is live and generating power. But we wont
                      disappear after this. You can reach our helpline for any
                      troubleshooting or issues. You can also opt in for our
                      monthly plant performance reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[4px] bg-[#D9D9D9] lg:mb-10 mb-4 mt-10'></div>

          {/* SellersDetails */}
          <div className=''>
            <div className='xl:max-w-[1340px] flex flex-col gap-4 2xl:max-w-[1470px] lg:text-3xl font-bold text-xl text-[#033E4D] lg:mx-auto mx-2'>
              Seller Details
              <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
                <div className='lg:w-2/5 w-full lg:p-10 p-4 flex items-center rounded-md shadow-md bg-[#D7F0DD]'>
                  <div className='flex justify-between w-full items-center'>
                    <div className='text-[#396571]'>
                      TCM Solar
                      <div className='flex gap-2'>
                        <svg
                          className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                          className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                          className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                          className='lg:h-[30px] lg:w-[33px] w-6 h-6'
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
                          className='lg:h-[30px] lg:w-[33px] w-6 h-6'
                          viewBox='0 0 33 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z'
                            fill='#38B557'
                          />
                        </svg>
                      </div>
                      <div className='flex items-center gap-1 lg:mt-6 mt-4 text-sm lg:text-xl'>
                        <svg
                          width='20'
                          height='20'
                          className='lg:h-5 lg:w-5 h-4 w-4'
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.5 6.25C12.5 9.01125 7.5 13.75 7.5 13.75C7.5 13.75 2.5 9.01125 2.5 6.25C2.5 4.92392 3.02678 3.65215 3.96447 2.71447C4.90215 1.77678 6.17392 1.25 7.5 1.25C8.82608 1.25 10.0979 1.77678 11.0355 2.71447C11.9732 3.65215 12.5 4.92392 12.5 6.25Z'
                            stroke='#396571'
                            strokeWidth='1.5'
                          />
                          <path
                            d='M7.5 6.875C7.66576 6.875 7.82473 6.80915 7.94194 6.69194C8.05915 6.57473 8.125 6.41576 8.125 6.25C8.125 6.08424 8.05915 5.92527 7.94194 5.80806C7.82473 5.69085 7.66576 5.625 7.5 5.625C7.33424 5.625 7.17527 5.69085 7.05806 5.80806C6.94085 5.92527 6.875 6.08424 6.875 6.25C6.875 6.41576 6.94085 6.57473 7.05806 6.69194C7.17527 6.80915 7.33424 6.875 7.5 6.875Z'
                            fill='#033E4D'
                            stroke='#396571'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        Kochi
                      </div>
                    </div>

                    <div className='relative lg:w-28 lg:h-28 w-20 h-20 flex justify-center items-center'>
                      <svg
                        viewBox='0 0 47 47'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='lg:w-[90px] lg:h-[90px] w-16 h-16 absolute'
                      >
                        <circle
                          cx='23.3945'
                          cy='23.3954'
                          r='23.3954'
                          fill='#38B557'
                          fillOpacity='0.2'
                        />
                      </svg>
                      <svg
                        className='lg:w-16 lg:h-16 w-8 h-8 absolute'
                        viewBox='0 0 34 34'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M32.5001 17.0102H20.9486C20.9493 16.9829 20.9497 16.9556 20.9498 16.9283L20.9498 16.9222C20.9497 16.8395 20.9469 16.7571 20.9415 16.6749H32.5001V17.0102ZM8.86954 8.30541L14.5729 14.0088C14.488 14.0822 14.4062 14.1595 14.3276 14.2404L8.6327 8.54212L8.86954 8.30541ZM20.0039 19.4398L25.4031 24.8399L25.1665 25.0764L19.7734 19.6834C19.8537 19.6056 19.9306 19.5243 20.0039 19.4398ZM19.8918 14.2697C19.8148 14.1884 19.7342 14.1104 19.6503 14.0361L25.2738 8.41269L25.5114 8.65018L19.8918 14.2697ZM17.1856 13.0707C17.1547 13.0699 17.1237 13.0696 17.0927 13.0696L17.0919 13.0696C17.0113 13.0698 16.9308 13.0725 16.8504 13.0776V1.20885H17.1856V13.0707ZM13.248 16.6749C13.2428 16.7547 13.2401 16.8348 13.2399 16.9151L13.2399 16.9155C13.2399 16.9471 13.2402 16.9786 13.241 17.0102H1.53697V16.6749H13.248ZM14.2118 19.4755C14.2856 19.5585 14.3631 19.6383 14.4438 19.7146L8.97711 25.1805L8.74027 24.9436L14.2118 19.4755ZM16.8504 20.7612C16.9307 20.7664 17.0114 20.769 17.0922 20.7692L17.0953 20.7692C17.1255 20.7692 17.1556 20.7688 17.1856 20.768V32.172H16.8504V20.7612Z'
                          fill='#38B557'
                          stroke='#38B557'
                          strokeWidth='2.39426'
                        />
                      </svg>

                      <img
                        src='/zircle.png'
                        alt='xyz'
                        className='lg:w-32 absolute'
                      />
                    </div>
                  </div>
                </div>

                <div className='lg:w-3/5 w-full flex lg:p-10 p-4 flex-col gap-4 text-[#396571] border rounded-md shadow-md bg-[#E4F3DA]'>
                  Key Highlights
                  <ul className='lg:text-base md:text-sm text-xs font-medium grid grid-cols-2 lg:grid-cols-3 gap-4'>
                    <li className='py-2 px-4 rounded-full bg-[#C9E6B5] text-center'>
                      Industry veteran
                    </li>
                    <li className='py-2 px-4 rounded-full bg-[#C9E6B5] text-center'>
                      Fast service
                    </li>
                    <li className='py-2 px-4 rounded-full bg-[#C9E6B5] text-center'>
                      Extensive service network
                    </li>
                  </ul>
                  <div className='lg:text-2xl text-lg font-bold lg:gap-0 gap-2 justify-between lg:items-end flex lg:flex-row flex-col w-full'>
                    <div className='flex gap-10'>
                      <div>
                        Total installations
                        <p className='font-medium'>10 MW</p>
                      </div>
                      <div>
                        Team Size
                        <p className='font-medium'>20+</p>
                      </div>
                    </div>
                    <div className='lg:hidden block h-[1px] bg-[#D9D9D9]'></div>
                    <div className='lg:text-lg text-sm flex cursor-pointer lg:justify-start justify-between items-center gap-2 font-medium'>
                      see more details
                      <svg
                        className='lg:w-8 lg:h-8 h-6 w-6 cursor-pointer'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_2880_18261)'>
                          <path
                            d='M6.66699 10.0013H13.3337M13.3337 10.0013L10.417 7.08464M13.3337 10.0013L10.417 12.918M10.0003 18.3346C14.6028 18.3346 18.3337 14.6038 18.3337 10.0013C18.3337 5.3988 14.6028 1.66797 10.0003 1.66797C5.39783 1.66797 1.66699 5.3988 1.66699 10.0013C1.66699 14.6038 5.39783 18.3346 10.0003 18.3346Z'
                            stroke='#396571'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_2880_18261'>
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

          <div className='h-[4px] mt-4'></div>
        </div>
      </div>

      {/* DiscoutnPopUp */}
      {isPopupDiscount && (
        <div className='fixed inset-0 z-40 bg-black bg-opacity-60 flex justify-center items-center transition-all transform ease-in-out duration-500'>
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className='flex justify-center items-center lg:mx-auto'
          >
            <div className='border text-[#396571] rounded-lg bg-white w-full md:max-w-lg mx-4'>
              <div className='lg:p-8 p-4 lg:text-xl text-lg flex justify-between font-bold bg-[#D7F0DD] rounded-t-lg'>
                Discount coupons
                <div
                  onClick={hideProductDiscount}
                  className='rounded-full w-7 h-7 cursor-pointer flex justify-center items-center text-xs bg-white text-[#396571] '
                >
                  ✖
                </div>
              </div>
              <div className='lg:p-8 p-4'>
                <div className='grid gap-4 md:text-base text-sm'>
                  <div className='flex flex-col justify-between border rounded-lg border-[#396571] p-4'>
                    <div className='md:text-xl text-base font-bold'>
                      FESTIVESALE{' '}
                    </div>
                    <div className=''>
                      Rs 10,000 off on all orders booked on or before 31st
                      October
                    </div>
                  </div>
                  <div className='flex flex-col justify-between border rounded-lg border-[#396571] p-4'>
                    <div className='md:text-xl font-bold text-base'>
                      ZIRCLENEW
                    </div>
                    <div className=''>
                      Rs 5,000 off on all orders booked online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SummaryPopUp */}
      {isPriceSummary && (
        <div
          onClick={hideProductSummary}
          className='fixed inset-0 z-40 bg-black bg-opacity-60 flex justify-center items-center transition-all transform ease-in-out duration-500'
        >
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className='flex justify-center items-center lg:mx-auto'
          >
            <div className='border text-[#396571] rounded-lg bg-white w-full md:max-w-lg mx-4'>
              <div className='lg:p-8 p-4 lg:text-xl text-lg flex justify-between font-bold bg-[#D7F0DD] rounded-t-lg'>
                Price Summary
                <div
                  onClick={hideProductSummary}
                  className='rounded-full w-7 h-7 cursor-pointer flex justify-center items-center text-xs bg-white text-[#396571] '
                >
                  ✖
                </div>
              </div>
              <div className='lg:p-8 p-4'>
                <div className='grid border rounded-lg border-[#396571] md:text-base text-sm'>
                  <div className='flex justify-between gap-4 px-2'>
                    <div className='font-semibold   p-2'>System price</div>
                    <div className=' p-2'>₹ 3,20,000</div>
                  </div>
                  <div className='flex justify-between gap-4 px-2'>
                    <div className='font-semibold   p-2'>Structure cost</div>
                    <div className=' p-2'>Included</div>
                  </div>
                  <div className='flex justify-between gap-4 px-2'>
                    <div className='font-semibold   p-2'>Subsidy available</div>
                    <div className=' p-2'>₹ 78,000</div>
                  </div>
                  <div className='flex justify-between gap-4 px-2'>
                    <div className='font-semibold   p-2'>
                      Final cost after subsidy
                    </div>
                    <div className='p-2'>₹ 2,42,000</div>
                  </div>
                  <div className='flex justify-between gap-4 px-2'>
                    <div className='font-semibold p-2'>
                      Upfront subsidy available
                    </div>
                    <div className=' p-2 text-[#38B557]'>Yes</div>
                  </div>
                  <div className='flex justify-between gap-4 font-bold lg:py-4 py-2 px-2 border-t-[1px] border-[#396571]'>
                    <div className='font-semibold p-2 md:text-lg'>
                      Final payable amount
                    </div>
                    <div className=' p-2'>₹ 2,42,000</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[#396571] lg:text-xl text-lg text-nowrap gap-2 flex justify-between items-center font-bold'>
                  <div className='h-[1px] w-full bg-[#396571]'></div>
                  Why ZIRCLE
                  <div className='h-[1px] w-full bg-[#396571]'></div>
                </div>

                <div className='lg:text-xs text-[8px] justify-between lg:p-8 p-4 items-start w-full flex gap-4'>
                  <div className=' lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                    <div className='relative  w-14 h-14 flex justify-center items-center'>
                      <svg
                        viewBox='0 0 47 47'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className=' w-10 h-10 absolute'
                      >
                        <circle
                          cx='23.3945'
                          cy='23.3954'
                          r='23.3954'
                          fill='#38B557'
                          fillOpacity='0.2'
                        />
                      </svg>
                      <svg
                        viewBox='0 0 33 32'
                        className=' w-8 h-8 absolute'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.9287 2.64016C16.0022 2.54659 16.0959 2.47093 16.2029 2.4189C16.3098 2.36688 16.4272 2.33984 16.5462 2.33984C16.6651 2.33984 16.7825 2.36688 16.8895 2.4189C16.9964 2.47093 17.0902 2.54659 17.1636 2.64016L19.53 5.64886C19.6261 5.77123 19.7563 5.8623 19.9042 5.91051C20.0521 5.95873 20.211 5.9619 20.3607 5.91964L24.0431 4.87575C24.1574 4.84317 24.2777 4.83699 24.3947 4.85767C24.5118 4.87836 24.6227 4.92538 24.7189 4.99517C24.8152 5.06497 24.8943 5.15572 24.9504 5.26058C25.0064 5.36543 25.0379 5.48165 25.0425 5.60046L25.1864 9.42675C25.1924 9.58218 25.2445 9.73231 25.3361 9.85808C25.4276 9.98385 25.5544 10.0796 25.7005 10.1331L29.2939 11.4544C29.4055 11.4953 29.5063 11.561 29.5887 11.6465C29.6712 11.7321 29.7331 11.8353 29.7699 11.9483C29.8067 12.0613 29.8174 12.1811 29.8011 12.2988C29.7848 12.4165 29.742 12.529 29.6759 12.6277L27.5436 15.8078C27.457 15.9371 27.4108 16.0891 27.4108 16.2447C27.4108 16.4003 27.457 16.5524 27.5436 16.6816L29.6759 19.8617C29.742 19.9605 29.7848 20.0729 29.8011 20.1906C29.8174 20.3083 29.8067 20.4282 29.7699 20.5412C29.7331 20.6542 29.6712 20.7574 29.5887 20.8429C29.5063 20.9285 29.4055 20.9942 29.2939 21.0351L25.7005 22.3563C25.5547 22.4101 25.4281 22.5059 25.3368 22.6317C25.2455 22.7574 25.1936 22.9074 25.1877 23.0627L25.0425 26.889C25.0379 27.0078 25.0064 27.124 24.9504 27.2289C24.8943 27.3337 24.8152 27.4245 24.7189 27.4943C24.6227 27.5641 24.5118 27.6111 24.3947 27.6318C24.2777 27.6525 24.1574 27.6463 24.0431 27.6137L20.3607 26.5698C20.2109 26.5271 20.0518 26.53 19.9037 26.5779C19.7555 26.6259 19.625 26.7169 19.5287 26.8393L17.1649 29.8493C17.0915 29.9429 16.9977 30.0185 16.8908 30.0706C16.7838 30.1226 16.6664 30.1496 16.5475 30.1496C16.4285 30.1496 16.3111 30.1226 16.2042 30.0706C16.0972 30.0185 16.0035 29.9429 15.93 29.8493L13.5636 26.8406C13.4676 26.7182 13.3373 26.6272 13.1895 26.5789C13.0416 26.5307 12.8827 26.5276 12.733 26.5698L9.05057 27.6137C8.93622 27.6463 8.81597 27.6525 8.69889 27.6318C8.58181 27.6111 8.47096 27.5641 8.3747 27.4943C8.27845 27.4245 8.19931 27.3337 8.14326 27.2289C8.08721 27.124 8.05572 27.0078 8.05115 26.889L7.90726 23.0627C7.90121 22.9073 7.84911 22.7571 7.75758 22.6314C7.66605 22.5056 7.53921 22.4099 7.39316 22.3563L3.79972 21.0351C3.68817 20.9942 3.58736 20.9285 3.5049 20.8429C3.42244 20.7574 3.36049 20.6542 3.3237 20.5412C3.28692 20.4282 3.27628 20.3083 3.29257 20.1906C3.30886 20.0729 3.35166 19.9605 3.41775 19.8617L5.55001 16.6816C5.63662 16.5524 5.68286 16.4003 5.68286 16.2447C5.68286 16.0891 5.63662 15.9371 5.55001 15.8078L3.41775 12.6277C3.35166 12.529 3.30886 12.4165 3.29257 12.2988C3.27628 12.1811 3.28692 12.0613 3.3237 11.9483C3.36049 11.8353 3.42244 11.7321 3.5049 11.6465C3.58736 11.561 3.68817 11.4953 3.79972 11.4544L7.39316 10.1331C7.53896 10.0794 7.66553 9.98355 7.75681 9.8578C7.8481 9.73205 7.90001 9.58203 7.90595 9.42675L8.05115 5.60046C8.05572 5.48165 8.08721 5.36543 8.14326 5.26058C8.19931 5.15572 8.27845 5.06497 8.3747 4.99517C8.47096 4.92538 8.58181 4.87836 8.69889 4.85767C8.81597 4.83699 8.93622 4.84317 9.05057 4.87575L12.733 5.91964C12.8827 5.9619 13.0416 5.95873 13.1895 5.91051C13.3373 5.8623 13.4676 5.77123 13.5636 5.64886L15.9313 2.64016H15.9287Z'
                          stroke='#38B557'
                          strokeWidth='1.5'
                        />
                        <path
                          d='M12.6221 16.2452L15.2383 18.8614L20.4709 13.6289'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <img
                        src='/circle.png'
                        alt='xyz'
                        className='lg:w-32 absolute'
                      />
                    </div>
                    80-point check quality inspection
                  </div>
                  <div className=' lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                    <div className='relative  w-14 h-14 flex justify-center items-center'>
                      <svg
                        viewBox='0 0 47 47'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className=' w-10 h-10 absolute'
                      >
                        <circle
                          cx='23.3945'
                          cy='23.3954'
                          r='23.3954'
                          fill='#38B557'
                          fillOpacity='0.2'
                        />
                      </svg>
                      <svg
                        className='  w-8 h-8 absolute'
                        viewBox='0 0 33 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.9953 14.4213L4.74681 23.6698C4.50356 23.9128 4.31058 24.2013 4.17892 24.5189C4.04726 24.8365 3.97949 25.177 3.97949 25.5208C3.97949 25.8646 4.04726 26.2051 4.17892 26.5227C4.31058 26.8403 4.50356 27.1288 4.74681 27.3718C5.23743 27.8623 5.90277 28.1378 6.59651 28.1378C7.29025 28.1378 7.95558 27.8623 8.4462 27.3718L17.6947 18.1207M23.3393 18.5982L28.4122 23.6711C28.9027 24.1617 29.1782 24.8271 29.1782 25.5208C29.1782 26.2145 28.9027 26.8799 28.4122 27.3705C27.9216 27.861 27.2563 28.1365 26.5625 28.1365C25.8688 28.1365 25.2034 27.861 24.7128 27.3705L16.5906 19.2496M9.65623 8.26915L6.87906 9.1927L4.10582 4.56845L5.95552 2.71875L10.5811 5.4933L9.65623 8.26915ZM9.65623 8.26915L13.3582 11.9712'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M13.9958 14.4226C12.8918 11.6062 13.1076 7.91074 15.3838 5.63459C17.6599 3.35844 21.859 2.86004 24.1705 4.24797L20.1938 8.22469L19.8236 12.2943L23.8932 11.9254L27.8699 7.94737C29.2591 10.2601 28.7594 14.4592 26.4833 16.7341C24.2071 19.0102 20.513 19.2261 17.6966 18.122'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <img
                        src='/circle.png'
                        alt='xyz'
                        className='lg:w-32 absolute'
                      />
                    </div>
                    Up to 5 years of Zircle maintenance
                  </div>
                  <div className=' lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                    <div className='relative  w-14 h-14 flex justify-center items-center'>
                      <svg
                        viewBox='0 0 47 47'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className=' w-10 h-10 absolute'
                      >
                        <circle
                          cx='23.3945'
                          cy='23.3954'
                          r='23.3954'
                          fill='#38B557'
                          fillOpacity='0.2'
                        />
                      </svg>
                      <svg
                        className='  w-8 h-8 absolute'
                        viewBox='0 0 33 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M27.0112 14.9377C27.0112 12.1622 25.9086 9.50038 23.946 7.5378C21.9834 5.57522 19.3216 4.47266 16.5461 4.47266C13.7706 4.47266 11.1088 5.57522 9.1462 7.5378C7.18362 9.50038 6.08105 12.1622 6.08105 14.9377'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M27.0112 24.0931V24.7472C27.0112 25.4411 26.7356 26.1065 26.2449 26.5972C25.7543 27.0878 25.0888 27.3635 24.395 27.3635H19.8165M3.46484 20.7417V18.2876C3.46493 17.7042 3.66002 17.1376 4.01911 16.6778C4.37819 16.2179 4.88066 15.8913 5.44666 15.7499L7.72281 15.1795C7.83847 15.1507 7.95918 15.1486 8.07576 15.1734C8.19235 15.1982 8.30175 15.2492 8.39568 15.3226C8.48961 15.396 8.56559 15.4898 8.61787 15.5969C8.67014 15.704 8.69733 15.8217 8.69737 15.9408V23.0872C8.69758 23.2066 8.67052 23.3245 8.61826 23.4319C8.566 23.5393 8.48991 23.6334 8.3958 23.707C8.30168 23.7805 8.19202 23.8316 8.07517 23.8564C7.95832 23.8811 7.83736 23.8789 7.72151 23.8498L5.44536 23.2808C4.8796 23.139 4.37742 22.8123 4.01859 22.3525C3.65976 21.8928 3.46486 21.3262 3.46484 20.743V20.7417ZM29.6275 20.7417V18.2876C29.6274 17.7042 29.4323 17.1376 29.0732 16.6778C28.7141 16.2179 28.2117 15.8913 27.6457 15.7499L25.3695 15.1795C25.2539 15.1507 25.1332 15.1486 25.0166 15.1734C24.9 15.1982 24.7906 15.2492 24.6966 15.3226C24.6027 15.396 24.5267 15.4898 24.4745 15.5969C24.4222 15.704 24.395 15.8217 24.395 15.9408V23.0872C24.3948 23.2065 24.4218 23.3242 24.474 23.4315C24.5262 23.5388 24.6022 23.6328 24.6961 23.7063C24.7901 23.7798 24.8996 23.831 25.0162 23.8558C25.1329 23.8807 25.2537 23.8786 25.3695 23.8498L27.6457 23.2808C28.2117 23.1393 28.7141 22.8127 29.0732 22.3529C29.4323 21.8931 29.6274 21.3264 29.6275 20.743V20.7417Z'
                          stroke='#38B557'
                          strokeWidth='1.5'
                        />
                        <path
                          d='M18.5087 29.3267H14.5843C14.0639 29.3267 13.5648 29.12 13.1968 28.752C12.8288 28.384 12.6221 27.8849 12.6221 27.3645C12.6221 26.8441 12.8288 26.345 13.1968 25.9771C13.5648 25.6091 14.0639 25.4023 14.5843 25.4023H18.5087C19.0291 25.4023 19.5282 25.6091 19.8961 25.9771C20.2641 26.345 20.4709 26.8441 20.4709 27.3645C20.4709 27.8849 20.2641 28.384 19.8961 28.752C19.5282 29.12 19.0291 29.3267 18.5087 29.3267Z'
                          stroke='#38B557'
                          strokeWidth='1.5'
                        />
                      </svg>

                      <img
                        src='/circle.png'
                        alt='xyz'
                        className='lg:w-32 absolute'
                      />
                    </div>
                    Life long service support
                  </div>
                  <div className=' lg:w-1/6 w-1/4 flex-col flex justify-start items-center text-center gap-2 font-medium'>
                    <div className='relative  w-14 h-14 flex justify-center items-center'>
                      <svg
                        viewBox='0 0 47 47'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className=' w-10 h-10 absolute'
                      >
                        <circle
                          cx='23.3945'
                          cy='23.3954'
                          r='23.3954'
                          fill='#38B557'
                          fillOpacity='0.2'
                        />
                      </svg>
                      <svg
                        className='  w-8 h-8 absolute'
                        viewBox='0 0 45 45'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M33.7471 37.0683L40.7534 30.062C40.9597 29.856 41.0756 29.5766 41.0759 29.2851V19.6624C41.0759 18.9335 40.7863 18.2344 40.2709 17.719C39.7555 17.2036 39.0565 16.9141 38.3276 16.9141C37.5987 16.9141 36.8996 17.2036 36.3842 17.719C35.8688 18.2344 35.5793 18.9335 35.5793 19.6624V27.9073'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M33.7469 29.7395L35.319 28.1675C35.4016 28.085 35.4671 27.987 35.5117 27.8792C35.5564 27.7713 35.5793 27.6557 35.5791 27.539C35.5789 27.3743 35.5328 27.2128 35.4461 27.0727C35.3594 26.9326 35.2355 26.8194 35.0881 26.7457L34.2764 26.3408C33.5888 25.9969 32.8104 25.8781 32.0515 26.0011C31.2926 26.1241 30.5916 26.4826 30.0477 27.026L28.4079 28.6658C27.7206 29.3529 27.3344 30.2848 27.3342 31.2566V37.0683M11.7605 37.0683L4.75411 30.062C4.54789 29.856 4.4319 29.5766 4.43164 29.2851V19.6624C4.43164 18.9335 4.72119 18.2344 5.2366 17.719C5.75201 17.2036 6.45105 16.9141 7.17995 16.9141C7.90885 16.9141 8.60789 17.2036 9.1233 17.719C9.63871 18.2344 9.92826 18.9335 9.92826 19.6624V27.9073'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M11.7599 29.7443L10.1879 28.1723C10.1054 28.0897 10.04 27.9917 9.99531 27.8839C9.95067 27.7761 9.92771 27.6605 9.92773 27.5438C9.92773 27.2085 10.1183 26.9025 10.4188 26.7505L11.2304 26.3455C11.9181 26.0017 12.6964 25.8829 13.4554 26.0059C14.2143 26.1288 14.9153 26.4874 15.4592 27.0308L17.099 28.6706C17.7862 29.3577 18.1725 30.2896 18.1727 31.2614V37.0731M25.8075 22.4155H19.6989V18.1409H15.4244V12.0324H19.6989V7.75781H25.8075V12.0324H30.082V18.1409H25.8075V22.4155Z'
                          stroke='#38B557'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>

                      <img
                        src='/circle.png'
                        alt='xyz'
                        className='lg:w-32 absolute'
                      />
                    </div>
                    Plant performance monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ProductDetailsPopup */}
      {isPopupVisible && (
        <div
          onClick={hideProductDetails}
          className='fixed inset-0 z-40 bg-black bg-opacity-60 flex justify-start transition-all transform ease-in-out duration-500'
        >
          <div className='rounded-full lg:right-[25%] right-[6%] top-6 lg:top-10 border absolute w-7 h-7 lg:w-12 lg:h-12 cursor-pointer flex justify-center items-center text-xs bg-white text-[#396571]'>
            ✖
          </div>

          <div className='flex justify-center items-center mx-auto'>
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
              className='md:max-w-lg px-4 w-full mx-4 bg-white border overflow-hidden text-[#396571] border-[#396571] rounded-lg shadow-lg md:p-6 p-4'
            >
              {/* Tab Navigation */}
              <div className='flex border-b relative border-gray-200 mb-4 overflow-hidden'>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`w-1/2 py-2 text-center text-base font-semibold ${
                    activeTab === 'specifications'
                      ? 'text-[#38B557] border-b-2 border-[#38B557] transform transition-all ease-in-out duration-500'
                      : 'text-gray-500 border-b-2'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('warranty')}
                  className={`w-1/2 py-2 text-center md:text-base text-sm font-semibold ${
                    activeTab === 'warranty'
                      ? 'text-[#38B557] border-b-2 border-[#38B557] transform transition-all ease-in-out duration-500'
                      : 'text-gray-500 border-b-2'
                  }`}
                >
                  Warranties and Service
                </button>
              </div>

              {/* Content Section with fixed width and min-height */}
              <div className='min-h-[300px] transition-all duration-500 ease-in-out'>
                {/* Specifications Section */}
                {activeTab === 'specifications' && (
                  <div className='w-full md:h-[500px] h-[440px] overflow-hidden hover:overflow-y-scroll scrollbar-thin'>
                    <h2 className='md:text-xl text-base font-semibold text-[#38B557] mb-2'>
                      Product details
                    </h2>
                    <div className='w-full mb-4 border md:text-base text-xs border-[#396571] rounded-lg'>
                      {/* Specifications details */}
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Solar Panel
                        </div>
                        <div className='md:p-4 p-2'>
                          Type: Monoperc Bifacial
                          <br />
                          Wattage: 545 Watts
                          <br />
                          Brand: Adani
                          <br />
                          Number: 9 nos
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Solar Inverter
                        </div>
                        <div className='md:p-4 p-2'>
                          Type: On-grid string inverter
                          <br />
                          Capacity: 3 kW
                          <br />
                          Brand: Growwatt
                          <br />
                          Phase: Single phase
                          <br />
                          Outdoor rating: IP65
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Structure
                        </div>
                        <div className='md:p-4 p-2'>
                          Type: Elevated structure
                          <br />
                          Height: 6ft-8ft
                          <br />
                          Material: HDGI
                          <br />
                          Thickness: 1.2 mm
                          <br />
                          Windspeed resilience: 120 kmph
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          AC Cables
                        </div>
                        <div className='md:p-4 p-2'>
                          Brand: Polycab
                          <br />
                          Length: 20 m
                          <br />
                          Thickness: 4–6 sq mm
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          DC Cables
                        </div>
                        <div className='md:p-4 p-2'>
                          Brand: Polycab
                          <br />
                          Length: 20 m
                          <br />
                          Thickness: 4–6 sq mm
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Lightning Arrestor
                        </div>
                        <div className='md:p-4 p-2'>Single-spike</div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Other Components
                        </div>
                        <div className='md:p-4 p-2'>
                          MC4 connectors, cable ties, conduits, SPDs, earthing
                          pits, ACDB, DCDB
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Other Accessories
                        </div>
                        <div className='md:p-4 p-2'>
                          Walkway, ladder, sprinkler
                        </div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Solar Meter
                        </div>
                        <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Bi-directional Meter
                        </div>
                        <div className='md:p-4 p-2 text-red-500'>❌</div>
                      </div>
                      <div className='grid grid-cols-2 border-b border-[#396571]'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Installation
                        </div>
                        <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                      </div>
                      <div className='grid grid-cols-2'>
                        <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                          Maintenance
                        </div>
                        <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Warranties and Service Section */}
                {activeTab === 'warranty' && (
                  <div className='w-full md:h-[500px] h-[440px] overflow-hidden hover:overflow-y-scroll scrollbar-thin'>
                    <h2 className='md:text-xl text-base font-semibold text-[#38B557] mb-2 w-full'>
                      Warranties and Service
                    </h2>
                    <div className='flex flex-col gap-8 w-full'>
                      {/* Service details */}
                      <div className='border border-[#396571] rounded-lg w-full'>
                        <div className='border-b-[1px] border-[#396571] md:p-4 p-2 lg:text-xl text-base font-bold bg-[#D7F0DD] rounded-t-lg'>
                          Warranties
                        </div>
                        <div className='grid md:text-base text-xs'>
                          <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Solar Panel
                            </div>
                            <div className='md:p-4 p-2'>
                              Performance warranty: 30 years
                              <br />
                              Product warranty: 12 years
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Inverter
                            </div>
                            <div className='md:p-4 p-2'>
                              Product warranty: 7 years
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-4'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              System
                            </div>
                            <div className='md:p-4 p-2'>
                              Workmanship warranty: 5 years
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='border md:text-base text-xs border-[#396571] rounded-lg w-full'>
                        <div className='border-b-[1px] border-[#396571] md:p-4 p-2 lg:text-xl text-base font-bold bg-[#D7F0DD] rounded-t-lg'>
                          Service
                        </div>
                        <div className='grid'>
                          <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Annual maintenance (from seller)
                            </div>
                            <div className='md:p-4 p-2'>5 years</div>
                          </div>
                          <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Inclusions:
                              <div className='pl-4'>Breakdown support</div>
                              <div className='pl-4'>Preventive maintenance</div>
                              <div className='pl-4'>Cleaning</div>
                            </div>
                            <div className='flex flex-col gap-2 md:p-4 p-2'>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span className='text-[#38B557]'>✅</span>
                              <span className='text-[#38B557]'>✅</span>
                              <span className='text-red-500'>❌</span>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Annual maintenance (from Zircle)
                            </div>
                            <div className='md:p-4 p-2'>5 years</div>
                          </div>
                          <div className='grid grid-cols-2 gap-4'>
                            <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                              Inclusions:
                              <div className='pl-4'>Breakdown support</div>
                              <div className='pl-4'>Preventive maintenance</div>
                              <div className='pl-4'>Cleaning</div>
                            </div>
                            <div className='flex flex-col gap-2 md:p-4 p-2'>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span className='text-[#38B557]'>✅</span>
                              <span className='text-[#38B557]'>✅</span>
                              <span className='text-red-500'>❌</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* mobile sticky bar */}

      <div className=' relative w-full mt-20'>
        <div className='flex justify-center items-center sm:gap-4 gap-2 sm:px-0 px-2 fixed bottom-0 z-40 bg-white lg:hidden text-white sm:text-sm text-xs font-medium h-[84px] w-full'>
          <div className='w-1/2 sm:w-2/5 bg-[#033E4D] rounded-lg shadow-lg h-11 flex justify-center items-center'>
          BOOK NOW AT RS 299 
          </div>
          <div className='w-1/2 sm:w-2/5 bg-[#38B557] rounded-lg shadow-lg flex h-11 justify-center items-center'>
          BOOK CONSULTATION
          </div>
        </div>
      </div>
    </>
  );
}
