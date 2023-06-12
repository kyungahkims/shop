import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button2 from '../components/ui/Button2';
import useCart from '../hooks/useCart';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { user} = useAuthContext();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <div className='px-4 basis-7/12'><img className='w-full ' src={image} alt={title} /></div>
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-2xl font-bold py-2'>{title}</h2>
          <p className='text-2xl font-bold text-price py-2  border-b border-gray-400'>
            {price}원
          </p>
          <p className='py-4 text-sm'>{description}</p>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션:
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && user && <p className='my-2'>✅{success}</p>}
          {success && !user && <p className='my-2'>✅로그인해주세요.</p>}
          <Button2 text='장바구니에 추가' onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
