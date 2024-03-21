const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(bodyParser.json());


app.use(cors());

app.post('/upload-photo', (req, res) => {
    const knownImageData = req.body.knownImage;

    const { spawn } = require('child_process');

    const pythonExecutablePath = 'C:\\Users\\ayush\\AppData\\Local\\Programs\\Python\\Python311\\python.exe';

    const pythonProcess = spawn(pythonExecutablePath, ['facerecog.py']);

    pythonProcess.on('error', (err) => {
        console.error('Error spawning Python process:', err);
    });


    let result = '';


   
    const stringifiedData = JSON.stringify(knownImageData);
    pythonProcess.stdin.write(stringifiedData);
    pythonProcess.stdin.end();


    pythonProcess.stdout.on('data', (data) => {
        console.log('Python script output:', data.toString());
        result += data.toString();
    });


    pythonProcess.stderr.on('data', (data) => {
        console.error('Python script error:', data.toString());
        res.status(500).json({ error: 'Internal server error1' });
    });


    pythonProcess.on('exit', (code) => {
        if (code === 0) {

            const [ename, flag] = result.trim().split('\n');
            res.json({ ename: ename, flag: flag === 'True' });
        } else {

            res.status(500).json({ error: 'Internal server error2' });
        }
    });
});

// Engine Start Di ding Di ding Di ding
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port${port}`);
});