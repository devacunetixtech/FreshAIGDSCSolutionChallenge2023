import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [image, setImage] = useState(null);
    const [response, setResponse] = useState(null);
 
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleOpenModal1 = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal1 = () => {
        setIsModalOpen1(false);
    };
 
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };
    
      const handleImageUpload = async () => {
        if (!image) {
          console.error('No image provided');
          return;
        }
    
        try {

            setIsModalOpen(false)
          // Create FormData
          const formData = new FormData();
          formData.append('image', image);
          console.log(formData);
    
          // Make a POST request to your backend
          const response = await axios.post('https://freshai-api.onrender.com/api/users/upload', formData);
          setResponse(response.data);

          setImage(null);
            
          setIsModalOpen1(true);
          // Handle the response from the backend
          console.log(response.data);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
    };

   return (
       <div className="w-[85%] mx-auto sm:mx-0 md:max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
           <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
               <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your file</span> or drag and drop your file here</p>
           </label>
           <input id="file" type="file" className="hidden" onChange={handleImageChange} onClick={handleOpenModal} name='image' accept='image/*' />


            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            {image && <img src={URL.createObjectURL(image)} alt="Preview" className='w-full' />}
                <button onClick={handleImageUpload} className='w-2/5 bg-[#F48352] py-2 rounded px-2 text-white text-sm'>Analyze Image</button>

                {
                    !image ? <p className='block'>No Image Provided</p> : null
                }
            </Modal>

            <Modal isOpen={isModalOpen1} onClose={handleCloseModal1}>
                <p className='capitalize'>
                    {response && response.labelName}
                </p>
            </Modal>


       </div>
   )
}
