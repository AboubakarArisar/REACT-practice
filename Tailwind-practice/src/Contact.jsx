import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './index.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSuccess = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your response has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccess();
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <>
      <h1 className='bg-black text-center text-white font-bold text-5xl'>Contact us</h1>
      <div className='container'>
        <div className='content rounded flex justify-around items-center'>
          <div className='right '>
            <img
              className='rounded'
              src='https://cdn.pixabay.com/photo/2016/10/03/15/42/button-1711962_640.png'
              alt='Contact us'
            />
          </div>
          <div className='left'>
            <form className='px-3 py-5 flex rounded justify-center items-center flex-col gap-8' onSubmit={handleSubmit}>
              <input
                className='rounded-md px-5 py-3  border-orange-400  border-2 bg-slate-900 text-blue-300'
                required
                placeholder='Enter your name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='rounded-md border-orange-400  border-2 px-5 py-3 bg-slate-900 text-blue-300'
                required
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className='rounded-md  border-orange-400  border-2 px-5 py-3 bg-slate-900 text-blue-300'
                required
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols='30'
                rows='10'
              ></textarea>
              <button
                className='px-5 py-2.5 hover:bg-amber-700 rounded w-32 h-11 text-center font-bold text-white bg-amber-500'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
