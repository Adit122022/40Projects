import React, { useRef } from 'react';

const RandomeColor = () => {
  const box = useRef(null);
  const h1 = useRef(null)
  const btn = useRef(null)

  const HandleColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2); 
    box.current.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    h1.current.style.color = `rgb(${g}, ${r}, ${a})`;
    btn.current.style.backgroundColor = `rgb(${g}, ${r}, ${a})`;
  };

  return (
    <div ref={box} className='w-full h-full transition-all duration-300 flex justify-center items-center flex-col px-12 gap-10 '>
      <h1 ref={h1} className='font-extrabold font-serif md:text-8xl text-center text-2xl'>Random Color Generator</h1>
      <p className='md:text-2xl text-center text-sm'>Generate a random color for your website.</p>
      <button ref={btn}
        onClick={HandleColor}
      className=' px-5 py-2  text-white md:text-2xl rounded-3xl  active:scale-95 active:bg-slate-500'
      >
        Generate
      </button>
    </div>
  );
};

export default RandomeColor;
