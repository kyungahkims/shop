import React from 'react';
import Products from '../components/Products';

export default function AllProducts() {
  return (
    <>
  <p className='p-8 text-2xl text-center font-bold pb-6 border-b border-gray-300'>
        전체 상품
      </p>
  <Products />;
  </>
  );
}
