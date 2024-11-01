import React from 'react';

interface ProductDetailsPopUpProps {
  onClose: () => void;
}

function PriceSummary({ onClose }: ProductDetailsPopUpProps) {
  return (
    <div
      onClick={onClose}
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
              <div onClick={onClose} className='rounded-full w-7 h-7 cursor-pointer flex justify-center items-center text-xs bg-white text-white'>✖</div>
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
  );
}

export default PriceSummary;
