import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {cartQuery: { data: products }} = useCart();

  return (
    <div className='relative'>
      <CiShoppingCart className='text-3xl' />
      {products && (
        <p className='w-6 h-6 text-center bg-circle text-white font-bold rounded-full absolute -top-2 -right-2'>{products.length}</p>
      )}
    </div>
  );
}
