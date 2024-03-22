// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/loginpage.css'; // Import the CSS file

function LoginPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginAdmin = () => {
        setIsAdmin(true);
        // handleLogin();
    };

    const handleLogin = () => {
        if (isAdmin) {

            if (id === 'apnap' && password === '0309') {
                navigate('/admin-home');
            } else {
                alert('Invalid credentials for admin login');
            }

        } else {
            navigate('/home');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {!isAdmin && (
                <div>
                    <button onClick={handleLoginAdmin}>Login as Admin</button>
                    <button onClick={handleLogin}>Login as Employee</button>
                </div>
            )}
            {isAdmin && (
                <form className="login-form">
                    <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)} />
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </form>
            )}
        </div>
    );
}

export default LoginPage;
