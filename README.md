# Face Detection Attendance System (Python, React, ExpressJS)

A full-stack attendance management system using face detection. Combines Python for backend face recognition, ExpressJS for API management, and React for the frontend. Suitable for educational institutions and organizations seeking to automate and secure attendance tracking.

---

## 🚀 Features (Summary)

- **Face Detection & Recognition:** Real-time camera integration, reliable face matching, basic anti-spoofing.
- **Automated Attendance:** Instant marking and feedback upon recognition.
- **User Management:** Role-based access (admin, teacher, student/employee), profile creation with facial data.

---

## 📦 Directory Structure

```plaintext
/
├── backend/         # Python face recognition code & API
├── server/          # ExpressJS API server
├── client/          # ReactJS frontend
├── database/        # Database models and migrations (if applicable)
├── README.md        # Project documentation
├── docker-compose.yml
└── ...
```

---

## 🛠️ Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/anmolp-03/Face-Detection-Attendance-python-react-ExpressJS.git
   cd Face-Detection-Attendance-python-react-ExpressJS
   ```

2. **Environment Configuration**
   - Create `.env` files in `backend/`, `server/`, and `client/` as needed

3. **Install Dependencies**
   ```bash
   cd backend && pip install -r requirements.txt
   cd ../server && npm install
   cd ../client && npm install
   ```

4. **Run the Application**
     - Start backend: `cd backend && python app.py`
     - Start server: `cd ../server && npm start`
     - Start frontend: `cd ../client && npm start`

---

## 📸 How It Works

- **Registration:** Admin enrolls users with face data
- **Attendance:** User stands before camera; system detects and marks attendance if recognized

---

## 👤 Use Cases

- Schools, colleges, universities
- Offices and co-working spaces

---

## 🧩 Tech Stack

- **Frontend:** ReactJS, Material-UI/Bootstrap
- **Backend:** Python (face_recognition, OpenCV), ExpressJS (Node.js)
- **Database:** MongoDB / MySQL 

---

## 🔮 Future Scope

- **Advanced Anti-Spoofing:** Integrate liveness detection to better prevent fake attendance.
- **Mobile App Integration:** Native apps for on-the-go attendance.
- **Cloud Deployment:** Leverage cloud services for scalability and remote access.
- **Real-time Notifications:** Notify users/admins of attendance events.
- **Analytics & Insights:** Advanced reporting and attendance analytics.
- **Integration with HR/ERP:** Sync attendance data with external systems.

---

## Contributors
- Anmol Panjwani (self)
- Ayush Patel
