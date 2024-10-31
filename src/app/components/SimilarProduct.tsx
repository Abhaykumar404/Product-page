import React from 'react';
import Product from './Product';

function SimilarProduct() {
  return (
    <div className='lg:text-3xl w-full flex flex-col lg:gap-8 gap-3 text-xl font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto px-2'>
      Compare with similar solutions
      <div className='flex gap-4 xl:w-[1300px] overflow-hidden lg:w-[1000px] md:w-[750px] w-[320px] hover:overflow-x-scroll scrollbar-thin'>
        <Product />
      </div>
    </div>
  );
}

export default SimilarProduct;
