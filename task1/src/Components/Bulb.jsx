
import React, { useState, useEffect, useRef } from 'react';

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [threadLength, setThreadLength] = useState(100);

  const startY = useRef(0);
  const lengthRef = useRef(100);

  const BASE_LENGTH = 100;
  const MAX_LENGTH = 300;
  const ACTIVATE_THRESHOLD = 250;

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;

      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      // console.log(clientY)
      if (!clientY) return;

      const deltaY = clientY - MAX_LENGTH;
      const newLength = deltaY;

      setThreadLength(newLength);
      lengthRef.current = newLength;
    };

    const handleUp = () => {
      if (!isDragging) return;

      setIsDragging(false);

      if (lengthRef.current > ACTIVATE_THRESHOLD) {
        setIsBulbOn((prev) => !prev);
      }

      setThreadLength(BASE_LENGTH);
      lengthRef.current = BASE_LENGTH;
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
  };

  return (
    <div className={`w-full h-screen relative flex flex-col items-center ${isBulbOn ? 'bg-yellow-200/50' : 'bg-gray-800'} transition-colors duration-300 overflow-hidden`}>
      <img className={`${isBulbOn ? 'fixed top-0 left-0 w-full h-full z-0' : 'hidden'} opacity-80 transition-all duration-300 ease-out lg:object-cover object-contain object-center`} src="/image.png" alt="" />

      {isBulbOn && <div className='w-full h-48 flex justify-center items-center top-0 left-0 absolute'>
        <img src="/aot.png" alt="" className='w-full lg:w-1/2 h-full object-cover' />
      </div>}
      <div className="relative flex flex-col items-center mt-20">
        {/* Bulb */}
        <div
          className={`z-10 w-32 h-40 rounded-full shadow-2xl ${isBulbOn
            ? 'bg-gradient-to-b from-[#ffb089] via-[#fcff63] to-[#ffe41a] opacity-80  shadow-[0_40px_60px_rgba(250,204,21,1)]'
            : 'bg-gradient-to-b from-[#6b6a68]  to-gray-600 shadow-none'
            } transition-all duration-300 flex items-center justify-center`}
        >

        </div>

        {/* Bulb Holder */}
        <div className="w-16 h-10 bg-gray-700 -mt-2 z-0 rounded-b-lg opacity-80" style={{ backgroundColor: `${isBulbOn ? 'gray' : 'yellow'}` }} />

        {/* Thread */}
        <div
          style={{ height: `${threadLength}px` }}
          className={`w-1 bg-black origin-top ${!isDragging ? 'transition-all duration-500 ease-out sm:ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]' : ''}`}
        >
          {/* Handle */}
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 cursor-grab active:cursor-grabbing shadow-md border-2 border-red-700"
            style={{ touchAction: 'none' }}
          />
        </div>

      </div>

      {/* <div className={`mt-20 text-xl font-mono ${isBulbOn ? 'text-gray-800' : 'text-gray-400'}`}>
        {isBulbOn ? "ON" : "OFF"}
      </div> */}

    </div >
  );
};

export default Bulb;
