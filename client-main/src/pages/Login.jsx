import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// import acunetix from '../assets/acunetix.jpg';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
  const { loginUser, loginInfo, updateLoginInfo, loginError, isLoginLoading } = useContext(AuthContext);

  return (
    <>
      {/* HERO SECTION */}
      <section className='w-[70%] md:w-[50%] lg:w-[30%] grid align-middle content-center items-center mx-auto text-center text-slate-500 min-h-screen space-y-4 md:space-y-10'>

          <div className='space-y-2'>
            <h3 className='text-5xl font-black font-mono text-[#F48352]'>
              FreshAi
            </h3>
            <h6>
              Welcome Back!
            </h6>
          </div>


          <form onSubmit={loginUser} className='w-full space-y-6'>
            <div className='grid gap-3'>
            <input
              type='text' 
              id='Email' 
              placeholder='Email' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) =>
                updateLoginInfo({...loginInfo, email: e.target.value})
              }
            >
            </input>

            <input 
              type='password'
              placeholder='Password' 
              id='password' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => 
                updateLoginInfo({...loginInfo, password: e.target.value})
              }
            >
            </input>

            <p className='text-sm text-right'>Forgot Password?</p>
            </div>

            <div className='text-center'>
              <button type='submit' className='bg-[#F48352] text-white text-sm font-medium w-full py-2 rounded'>
                {isLoginLoading ? "Logging in" : "Log in"}
              </button>
            </div>
          </form>

          {
            loginError?.error && (
              <div>{loginError?.message}</div>
            )
          }

          <div>
            <p className='text-sm'>Don’t have an account yet? <Link to='/register' className='text-[#F48352]'>Sign Up</Link></p>
          </div>
        </section>
</>
  );
}

export default Login;
