import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.error('No image provided');
      return;
    }

    try {
      // Create FormData
      const formData = new FormData();
      formData.append('image', image);
      console.log(formData);

      // Make a POST request to your backend
      const response = await axios.post('https://freshai-api.onrender.com/api/users/upload', formData);

      // Handle the response from the backend
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
