import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const handleChange =(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center
      gap-4'>
        {/*left side*/}
        <div className='flex-1'>
        <Link to="/" className=' 
    font-bold dark:text-white text-4xl'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
    via-purple-500 to-pink-600 rounded-lg text-white'>Shashika's</span>
    Blog
    

  </Link>
  <p className='text-sm mt-5'>
    This is a demo project.You can sign up using your email and
     password<br/> or with google.
  </p>
        </div>
        {/*right*/}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value = 'Your userName'/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username' onChange ={handleChange}/>
               
            </div>
            <div>
              <Label value = 'Your Email'/>
              <TextInput
              type='email'
              placeholder='Email'
              id='email' onChange ={handleChange}/>
               
            </div>
            <div>
              <Label value = 'Your Password'/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password' onChange ={handleChange}/>
               
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
            

          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>

      
      
      </div>

    
    </div>
  )
}
