// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;

        video.onloadedmetadata = () => {
            video.play().catch(err => console.warn('Play failed:', err));
        };
        
        // Use oncanplay to ensure video is ready for playback
        video.oncanplay = () => {
            // Allow the video to play after metadata is loaded
            console.log('Video is ready to play');
        };
    })
    .catch(function (err) {
        console.error('Error accessing the webcam:', err);
    });


// Capture photo and send to server
var captureButton = document.getElementById('captureButton');
captureButton.addEventListener('click', function () {
    var video = document.getElementById('video');
    video.pause();

    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to base64
    var imageData = canvas.toDataURL('image/jpeg');

    // Send photo to server
    fetch('http://localhost:3000/upload-photo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ knownImage: imageData })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response from server:', data);
            var resultDiv = document.getElementById('result');
            resultDiv.textContent = `Test image: ${data.ename}, Result: ${data.flag}`;
            // Safe video play with error handling
            setTimeout(() => {
                video.play().catch(err => console.warn('Play interrupted after capture:', err));
            }, 200); // Small delay
        })
        .catch(error => {
            console.error('Error sending photo to server:', error);
            var resultDiv = document.getElementById('result');
            resultDiv.textContent = "Server Is Down";
            // Resume video safely
            setTimeout(() => {
                video.play().catch(err => console.warn('Play interrupted after error:', err));
            }, 200);
    });
});