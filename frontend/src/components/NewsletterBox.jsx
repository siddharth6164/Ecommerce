import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '> Subscribe now & get new of upcoming offers and sale </p>
        <p className='text-gray-400 mt-3'> Sign up today and enjoy an exclusive 20% discount on your first order!</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>

            <input type="email" placeholder='Enter your email.' className='w-full sm:flex-1 outline-none' required/>

            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox