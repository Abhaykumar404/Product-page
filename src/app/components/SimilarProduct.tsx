import React from 'react';
import Product from './Product';

function SimilarProduct() {
  return (
    <div className='lg:text-3xl w-full flex flex-col lg:gap-8 gap-3 text-xl font-bold text-[#033E4D] xl:max-w-[1340px] 2xl:max-w-[1470px] xl:mx-auto px-2'>
      Compare with similar solutions
      <div className='flex'>
        <Product />
      </div>
    </div>
  );
}

export default SimilarProduct;
