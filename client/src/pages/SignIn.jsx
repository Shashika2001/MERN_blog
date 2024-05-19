import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import{useDispatch, useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData,setFormData]=useState({});

  const{loading, error:errorMessage} = useSelector(state =>state.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange =(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});

    console.log(formData);
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all fields.'));
    }
    try {
      dispatch(signInStart());
     
      console.log(JSON.stringify(formData));
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
     
    } catch (error) {
      dispatch(signInFailure(error.message));
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
    via-purple-500 to-pink-600 rounded-lg text-white'>shashika's</span>
   Blog
    

  </Link>
  <p className='text-sm mt-5'>
    This is a demo project.You can sign in using your email and
     password<br/> or with google.
  </p>
        </div>
        {/*right*/}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            
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
              placeholder='********'
              id='password' onChange ={handleChange}/>
               
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign In
            </Button>
            

          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
        </div>

      
      
      </div>

    
    </div>
  )
}
