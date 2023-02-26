import React from 'react';

const Load = () => {
  return (
    <div className='grid place-content-center bg-background min-h-screen max-h-screen'>
      <div className='text-4xl text-white flex select-none'>
        <div className='inline-flex ping absolute'>
          Hangman<span className='text-accent'>.</span>
        </div>
        <div className='inline-flex relative pulse'>
          Hangman<span className='text-accent'>.</span>
        </div>
      </div>
      <a
        href='https://th4kur.me'
        className=' absolute bottom-0 right-0 text-xs opacity-70 text-rose-100'
      >
        by eashaan.
      </a>
    </div>
  );
};

export default Load;
