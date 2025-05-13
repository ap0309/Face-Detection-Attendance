import React, { useState } from 'react';
import WebcamComponent from './WebcamComponent';

const UserRegistrationWithWebcam = () => {
  const [formData, setFormData] = useState({
    eid: '',
    name: '',
    email: '',
    designation: '',
    dob: '',
    address: '',
    phone: '',
    department: '',
    salary: '',
    joiningDate: '',
    manager: '',
    skills: '',
    emergencyContact: '',
    gender: '',
    nationality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/update-employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error updating employee');
      }

      const data = await response.json();
      console.log('Server response:', data);

      // Clear input fields after successful update
      setFormData({
        eid: '',
        name: '',
        email: '',
        designation: '',
        dob: '',
        address: '',
        phone: '',
        department: '',
        salary: '',
        joiningDate: '',
        manager: '',
        skills: '',
        emergencyContact: '',
        gender: '',
        nationality: '',
      });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  // Handle the captured photo from the webcam
  const handlePhotoCapture = (imageData) => {
    console.log('Captured photo:', imageData);

    // Send photo to server
    fetch('http://localhost:3000/upload-photo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photo: imageData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
      })
      .catch((error) => {
        console.error('Error sending photo to server:', error);
      });
  };

  return (
    <div className="container mt-5" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">User Registration</h2>
          <form onSubmit={handleSubmit}>
            {/* Employee ID */}
            <div className="mb-3">
              <label htmlFor="eid" className="form-label">Employee ID:</label>
              <input
                type="text"
                id="eid"
                name="eid"
                value={formData.eid}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            {/* Additional Form Fields */}
            <WebcamComponent
              apiendpoint="http://localhost:3000/upload-photo"
              onPhotoCapture={handlePhotoCapture}
            />
            <button type="submit" className="btn btn-primary">Update Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationWithWebcam;
