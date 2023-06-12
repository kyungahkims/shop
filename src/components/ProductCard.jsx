import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
      <img className='w-full' src={image} alt={title} />
        <div className='relative text-center my-3 mx-2'>
        <p className='absolute -top-9 text-gray-700 text-xs'>{category}</p>
        <h3 className='truncate'>{title}</h3>
        <p className='font-bold text-price'>{`${price}원`}</p>
      </div>
    </li>
  );
}
