import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/loginpage.css'; // Import the CSS file

function LoginPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
    const navigate = useNavigate();
    const savedid = 'apnap' ;
    const savedpass ='0309';
    const handleLoginAdmin = () => {
        setIsAdmin(true);
    };

    const handleLogin = () => {
        if (isAdmin) {
            if (id === savedid && password === savedpass) {
                navigate('/admin-home');
            } else {
                alert('Invalid credentials for admin login');
            }
        } else {
            navigate('/home');
        }
    };

    const handleForgotPassword = () => {
        // Show security question input when clicked on forgot password
        setShowSecurityQuestion(true);
    };

    const handleSecurityQuestionSubmit = () => {
        // Check if the security answer matches the expected answer
        const expectedAnswer = "carrot"; // You can change this to your preferred answer
        if (securityAnswer.toLowerCase() === expectedAnswer.toLowerCase()) {
            // Proceed with password reset logic...
            alert("Password reset allowed."); // Replace with actual password reset logic
        } else {
            // Display error if answer is incorrect
            alert("Incorrect security answer. Please try again.");
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
                    {!showSecurityQuestion ? (
                        <div>
                            <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)} />
                            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleLogin}>Login</button>
                            <div style={{ marginTop: '10px' }}>
                                {/* Show forgot password link */}
                                <span onClick={handleForgotPassword} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}>Forgot Password?</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3>Security Question</h3>
                            <input type="text" placeholder="What's your favorite vegetable?" value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} />
                            <button onClick={handleSecurityQuestionSubmit}>Submit</button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
}

export default LoginPage;
