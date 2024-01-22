import { useEffect, useRef } from 'react';

export default function Camera() {
 const videoRef = useRef();

 useEffect(() => {
   navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
       if (videoRef.current) {
         videoRef.current.srcObject = stream;
       }
     })
     .catch(err => console.error(err));
 }, []);

 function captureImage() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
 
  canvas.width = videoRef.current.videoWidth;
  canvas.height = videoRef.current.videoHeight;
 
  context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
 
  const image = new Image();
  image.src = canvas.toDataURL('image/png');
 }

 return <video ref={videoRef} autoPlay />;
}
