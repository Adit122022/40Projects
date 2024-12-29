import React, { useRef } from 'react'

const IMageSwap = () => {
    const img1Ref = useRef(null)
    const img2Ref = useRef(null)
    const handleSwap = () => {
        const temp = img1Ref.current.src
        img1Ref.current.src = img2Ref.current.src
        img2Ref.current.src = temp
  
    }
  return (
    <div className="flex justify-center gap-5 items-center w-screen h-screen bg-gray-500">
     <div className='rounded-lg shadow-lg w-3/12 h-2/3 overflow-hidden border-2 border-gray-300'>
     <img
      ref={img1Ref}
        src='https://i.pinimg.com/736x/ba/46/2c/ba462cef2003a18af1fa43774baaefd6.jpg'
        alt="Swap Image"
        className=" object-cover w-full h-full  transition-transform duration-300 transform hover:scale-110 "
      />
     </div>
     <button className=' active:scale-95 bg-slate-700 px-5 py-2 hover:bg-slate-600 rounded-xl text-white font-bold font-sans text-xl' onClick={handleSwap}> SWAP</button>
     <div className='rounded-lg shadow-lg w-3/12 h-2/3 overflow-hidden border-2 border-gray-300'>
     <img
        ref={img2Ref}
        src='https://i.pinimg.com/736x/9c/ef/b8/9cefb8d70a53fcbe07a42e65a2018e9e.jpg'
        alt="Swap Image"
        className=" object-cover w-full h-full transition-transform duration-300 transform hover:scale-110 "
      />
     </div>
    
   
    </div>
  )
}

export default IMageSwap