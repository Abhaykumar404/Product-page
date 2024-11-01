import React from 'react'


interface ProductDetailsPopUpProps {
    onClose: () => void; 
}


function DiscountPopUp({ onClose }: ProductDetailsPopUpProps) {
  return (
    <div
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
            Discount coupons
              <div onClick={onClose} className='rounded-full w-7 h-7 cursor-pointer flex justify-center items-center text-xs bg-white text-[#396571] '>✖</div>
            </div>
            <div className='lg:p-8 p-4'>
              <div className='grid gap-4 md:text-base text-sm'>
                <div className='flex flex-col justify-between border rounded-lg border-[#396571] p-4'>
                  <div className='md:text-xl text-base font-bold'>FESTIVESALE </div>
                  <div className=''>Rs 10,000 off on all orders booked on or before 31st October</div>
                </div>
                <div className='flex flex-col justify-between border rounded-lg border-[#396571] p-4'>
                  <div className='md:text-xl font-bold text-base'>ZIRCLENEW</div>
                  <div className=''>Rs 5,000 off on all orders booked online</div>
                </div>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default DiscountPopUp