import React, { useState } from 'react';

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const handleBulb = () => {
    setIsBulbOn(!isBulbOn);
  };

  return (
    <div className={`w-full h-screen flex flex-col gap-10 justify-center items-center ${isBulbOn ? 'bg-yellow-100' : ' bg-gray-800'} transition-all duration-300`}>
      {/* Bulb */}
      <div
        className={`w-32 h-32 rounded-full shadow-lg ${
          isBulbOn ? 'bg-yellow-400 shadow-orange-400' : 'bg-gray-500 shadow-gray-500'
        } transition-all duration-300`}
      >

      </div>

      <button
        onClick={handleBulb}
        className={`mt-8 px-6 py-2 font-bold ${ isBulbOn ? '  text-white bg-slate-500 rounded-lg hover:bg-slate-700' : 'text-black bg-gray-500 rounded-lg hover:bg-gray-700'}  transition-all duration-300`}>
        {isBulbOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default Bulb;
