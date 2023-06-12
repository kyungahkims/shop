import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand text-white text-xs py-2 px-4 rounded-3xl hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
