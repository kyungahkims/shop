import React from 'react';

export default function Button2 ({ text, onClick }) {
  return (
    <button
      className='bg-brand text-white text-base py-5 px-2 rounded-sm hover:brightness-110'
      onClick={onClick}
      >
      {text}
    </button>
  );
}
