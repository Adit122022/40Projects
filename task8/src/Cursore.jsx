import React, { useEffect, useRef } from 'react';
import { use } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
   useEffect(() =>{
    window.addEventListener('mousemove', 
        (e)=>{
            // console.log(e.clientX, e.clientY);
            cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        }
    );
})

  return (
    <div className=''>
      <h1 className=" absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] text-center text-9xl font-bold my-10">Cursor Animation</h1>
      <div
        ref={cursorRef}
        className="w-8 h-8 bg-white rounded-full absolute pointer-events-none transition-all ease-linear mix-blend-difference  duration-150"
      ></div>
    </div>
  );
};

export default Cursor;
