import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import api from '../config/api';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

  const[currentState, setCurrentState] = useState('Login');
  const {token,setToken, navigate, backendUrl} = useContext(ShopContext)

  const[name,setName] = useState('')
  const[password,setPassword] = useState('')
  const[email,setEmail] = useState('')

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    try {
      const endpoint = currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const data = currentState === 'Sign Up' 
        ? { name, email, password }
        : { email, password };

      console.log('Sending request to:', endpoint, data);

      const response = await api.post(endpoint, data);

      console.log('Response:', response.data);

      if(response.data.success) {
        if(response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        }
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Login/Register Error:', error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  }

  useEffect(() =>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 '/>
      </div>

    {currentState === 'Login' ? ' ' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 ' required/> }

    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 ' required/>

    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 ' required/>

    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot your password?</p>
      {
        currentState === 'Login' ? 
        <p className='cursor-pointer' onClick={()=> setCurrentState('Sign Up')}> Create Account</p> :
        <p className='cursor-pointer' onClick={()=> setCurrentState('Login')}> Login Here</p>
      }
    </div>

    <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{ currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login