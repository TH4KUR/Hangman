import React from 'react';
import { useState } from 'react';

const Round = ({ rr, wrong, setWrong, word, setRound, setPrev }) => {
  return (
    <main
      style={{
        'grid-template-columns': '1fr 8fr 1fr',
      }}
      className='bg-[#222] h-[100vh] text-gray-100 grid relative'
    >
      <div></div>
      <div className='flex justify-center items-center flex-col bg-[#00000099]'>
        <h1 className="text-6xl font-['MyNerve']">Game Over</h1>
        <p className='text-2xl'>Announce the winning house</p>
      </div>
      <div></div>
    </main>
  );
};

export default Round;
