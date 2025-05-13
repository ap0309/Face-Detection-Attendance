import React, { useRef } from 'react';
import WebcamComponent from './WebcamComponent'; // Adjust path as needed

function RegUserPage() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const handlePhotoCapture = (imageData) => {
        console.log('Received captured image:', imageData);
        // You can also store it in state or send it to backend here
    };

    const apiendpoint = 'http://your-api-endpoint.com/upload'; // replace with actual

    return (
        <div>
            <h2>Register User</h2>
            {/* Add registration form UI here */}

            <WebcamComponent
                apiendpoint={apiendpoint}
                onCapture={handlePhotoCapture}
            />
        </div>
    );
}

export default RegUserPage;
