import React, { useState } from 'react';  
import avatar from '../assets/avatar.png';
import hero from '../assets/hero.jpg';
import profile from '../assets/profile.svg';
import upload from '../assets/upload.svg';
import Card from "../components/Card";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ScanCard from '../components/ScanCard';
import ImageUpload from '../components/ImageUpload';

const Dashboard = () =>{
  const { user } = useContext(AuthContext);

    return (
      <main>
        <section className='flex sticky top-0 justify-between mx-auto w-[95%] items-center py-3 px-5 md:px-0 z-40 bg-white'>
          <div className='flex items-center space-x-3 md:space-x-5'>
            <p className='font-semibold text-slate-700 text-xl'>Welcome {user.name}!</p>
          </div>

          <div>
            <img src={profile} className='w-8' />
          </div>
          
        </section>


        <section className='w-[85%] md:w-[93%] mx-auto my-8 space-y-1'>
          <h3 className='text-4xl font-semibold'>
            Scan your fruits & veggies using Ai
          </h3>
          <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam. <span className='hidden md:inline'> Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Arcu odio ut sem nulla pharetra diam sit amet. Cursus in cing. </span>
          </p>
        </section>

        <div className='md:grid grid-cols-2 md-w-2/3 justify-items-center'>
          <section className='w-[95%] mx-auto sm:mx-0 mt-5 md:mt-0 max-h-f md:w-[95%] grid justify-items-center'>
            {/* <div className='w-[90%] rounded-md border border-[#F48352] py-4 px-4 mx-auto space-y-4 h-full md:flex md:flex-col md:justify-center'>
              <p className='text-left text-3xl font-semibold font-sans text-[#F48352]'>
                Daily Health Tip           
              </p>
              <div className='text-gray-700'>
                Drink plenty of water throughout the day to stay hydrated. 
                Water is essential for various bodily functions.
                Include a variety of fruits, vegetables, whole grains,
                lean proteins, and healthy fats in your diet.
              </div>
            </div> */}
            <div className='hidden lg:block w-[90%] rounded-md h-full bg-[url("./assets/hero.jpg")] bg-cover'></div>
            <img src={hero} className='lg:hidden w-[90%] rounded-md mx-auto' />
          </section>

          <section className='space-y-5 md:grid grid-flow-row mt-10 md:mt-0 md:w-[95%] mx-auto md:justify-items-center'>
            {/* <Card /> */}
            <Card />
            <ScanCard />
          </section>
        </div>


      </main>
    );
  }
  

  export default Dashboard;

  