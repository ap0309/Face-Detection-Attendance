import React, { useState } from 'react';

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


  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL('image/jpeg');
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
          // Handle response as needed
        })
        .catch((error) => {
          console.error('Error sending photo to server:', error);
          // Handle error as needed
        });
    }
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
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            {/* Designation */}
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Phone Number */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Department */}
            <div className="mb-3">
              <label htmlFor="department" className="form-label">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Salary */}
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary:</label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Joining Date */}
            <div className="mb-3">
              <label htmlFor="joiningDate" className="form-label">Joining Date:</label>
              <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Manager */}
            <div className="mb-3">
              <label htmlFor="manager" className="form-label">Manager:</label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Skills */}
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">Skills:</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Emergency Contact */}
            <div className="mb-3">
              <label htmlFor="emergencyContact" className="form-label">Emergency Contact:</label>
              <input
                type="tel"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {/* Gender */}
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Nationality */}
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">Nationality:</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <WebcamComponent apiendpoint='http://localhost:3000/upload-photo' onPhotoCapture={handlePhotoCapture} />

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Update Employee</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default UserRegistrationWithWebcam;
