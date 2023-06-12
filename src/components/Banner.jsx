import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-4xl mt-5'>23 SUMMER 캡슐 컬렉션 :  'et Aoutiens'</h2>
        <p className='text-xl mt-4'>SJSJ와 장원영이 함께한 23 썸머 신상품 보러가기 part.2</p>
      </div>
    </section>
  );
}
