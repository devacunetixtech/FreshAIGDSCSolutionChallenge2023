import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
// import acunetix from '../assets/acunetix.jpg';
import { AuthContext } from '../context/AuthContext';

const Register = () =>{
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ file, setFile ] = useState();
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);
    return (
      <>
        {/* HERO SECTION */}
        <section className='w-[70%] md:w-[50%] grid align-middle content-center items-center mx-auto text-center text-slate-500 min-h-screen space-y-10'>
          <div>
          <div>
            <h3 className='text-5xl font-black font-mono text-[#F48352]'>
              FreshAi
            </h3>
          </div>
          </div>

          <form onSubmit={registerUser} className='w-full space-y-6'>
            <p className='text-xs'>Already have an account? <a href='#' className='text-[#F48352]'>Login</a></p>
            
            <div className='grid md:grid-cols-2 w-full gap-5'>
            <input 
              type='text' 
              id='name' 
              placeholder='Name' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => updateRegisterInfo({...registerInfo, name: e.target.value})}  
            >
            </input>
            
            <input 
              type='text' 
              id='username' placeholder='Username' className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => updateRegisterInfo({...registerInfo, username: e.target.value})}  
            >
            </input>

            <input 
              type='text' 
              id='Email' 
              placeholder='Email' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})}  
            >
            </input>

            <input 
              type='text' 
              placeholder='Phone Number' 
              id='phone' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => updateRegisterInfo({...registerInfo, phoneNo: e.target.value})}  
            >
            </input>
   
            <input 
              type='password' 
              placeholder='Password' 
              id='password' 
              className='rounded h-10 border border-slate-200 px-3 w-full placeholder:text-xs'
              onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}  
            >
            </input>
            
            </div>

            <div className='text-center'>
              <button type='submit' className='bg-[#F48352] text-white text-sm font-medium w-[50%] py-2 rounded'>
                {isRegisterLoading ? "Signing up" : "Sign Up"}
              </button>
            </div>
          </form>

          {
            registerError?.error && (
              <div>{registerError?.message}</div>
            )
          }
          <div>
            <p className='text-sm'>Have an account? <Link to='/login' className='text-[#F48352]'>Log in</Link></p>
          </div>
          <div>
            <p className='text-sm'>By joining, you agree to the Terms and Privacy Policy.</p>
          </div>
        </section>
      </>
    );
  }
  export default Register;