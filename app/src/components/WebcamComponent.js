import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'webcam-easy';

function WebcamComponent() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);
    const [videoStarted, setVideoStarted] = useState(false); // Track if video has started

    const startVideo = () => {
        if (!videoStarted) {
            const webcam = new Webcam(videoRef.current, 'user', canvasRef.current);
            webcamRef.current = webcam; // Save the Webcam instance reference
            webcam.start()
                .then(() => {
                    console.log('Webcam started');
                    setVideoStarted(true); // Set videoStarted to true once video starts
                })
                .catch(error => console.error('Error starting webcam:', error));
        }
    };

    const capturePhoto = () => {
        if (!videoStarted) {
            startVideo(); // Start video if not already started
        }
        const video = videoRef.current;
        // Continue with capture photo logic...
    };

    const handleClose = () => {
        if (webcamRef.current) {
            webcamRef.current.stop();
        }
        // Navigate back to the homepage
        navigate('/');
    };

    return (
        <div className="webcam-overlay">
            <div className="webcam-container">
                <button className="close-button" onClick={handleClose}>Close</button>
                <video ref={videoRef} onClick={startVideo} />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <button onClick={capturePhoto}>Capture Photo</button>
            </div>
        </div>
    );
}

export default WebcamComponent;
