import React, { useRef, useEffect } from 'react';
import Webcam from 'webcam-easy';

function WebcamComponent(props) {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);

    useEffect(() => {
        accessWebcam();
        return () => {
            if (webcamRef.current) {
                webcamRef.current.stop();
            }
        };
    }, []);

    const accessWebcam = () => {
        const webcam = new Webcam(videoRef.current, 'user', canvasRef.current);
        webcamRef.current = webcam; // Save the Webcam instance reference
        webcam.start()
            .then(() => {
                console.log('Webcam started');

                // Wait for metadata to ensure dimensions are available
                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play().catch(err => {
                    console.warn('play() failed:', err.message);
                    });
                };
                })
            .catch(error => console.error('Error starting webcam:', error));
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        if (video && video.readyState >= 2) {
            video.pause();

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = canvas.toDataURL('image/jpeg');
            console.log(JSON.stringify({ knownImage: imageData }));
            fetch( props.apiendpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ knownImage: imageData })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Response from server:', data);
                    // Handle response as needed
                })
                .catch(error => {
                    console.error('Error sending photo to server:', error);
                    // Handle error as needed
                })
                .finally(() => {
                    if (video.paused && video.srcObject) {
                        video.play().catch(err =>
                            console.warn('play() interrupted:', err)
                        );
                    }
                });
        }
    };

    const handleClose = () => {
        if (webcamRef.current) {
            webcamRef.current.stop();
        }
        // Add your close functionality here, for example:
        console.log('Closing webcam');
    };

    return (
        <div className="webcam-overlay">
            <div className="webcam-container">
                <button className="close-button" onClick={handleClose}>Close Webcam</button>
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ width: '100%' }}
                    />

                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <button onClick={capturePhoto}>Capture Photo</button>
            </div>
        </div>
    );
}

export default WebcamComponent;
