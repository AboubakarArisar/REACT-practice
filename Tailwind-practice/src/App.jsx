import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <h1 className='bg-black text-white text-center font-bold '>Tailwind Practice </h1>
      <div className="container flex justify-center items-center">
        <div className="content border-4 bg-slate-100 m-5 px-10 rounded-lg flex justify-center items-center flex-col border-transparent hover:bg-pink-100 delay-100 ease-in-out cursor-pointer">
          <div className="span1 m-3">
            <span className='text-3xl m-5 px-5 py-2 text-red-600 font-semibold'>Hello Tailwind</span>
          </div>
          <div className="span2 m-3">
            <span className='text-4xl m-5 px-5 py-2 text-blue-600'>Start editing to see some magic happen.</span>
            <button className='border-2 px-5 py-2 w-24 h-12 mr-5 hover:bg-blue-800 text-white font-medium bg-blue-400 rounded-lg transition-colors duration-300 ease-in-out'>Button</button>
            <button className='border-2 px-5 py-2 w-24 h-12 ml-2 hover:bg-yellow-800 transition-colors duration-300 ease-in-out text-white font-medium bg-yellow-400 rounded-lg'>Button</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
