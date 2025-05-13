// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
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
            video.play(); // Resume video playback after receiving response
        })
        .catch(error => {
            console.error('Error sending photo to server:', error);
            var resultDiv = document.getElementById('result');
            resultDiv.textContent = "Server Is Down";
            video.play();
    });
});