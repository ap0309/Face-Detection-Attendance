import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/loginpage.css'; // Import the CSS file

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showInputBoxes, setShowInputBoxes] = useState(false); // State to manage visibility of input boxes
    const [showSecurityQuestion, setShowSecurityQuestion] = useState(false); // State to manage visibility of security question
    const [securityAnswer, setSecurityAnswer] = useState(''); // State to store the security answer
    const navigate = useNavigate();
    const savedAdminId = 'apnap';
    const savedAdminPass = '0309';
    const adminFavoriteNumber = 502; // Admin's favorite number for the security question

    const handleAdminLogin = () => {
        setShowInputBoxes(true); // Show input boxes when logging in as admin
    };

    const handleEmployeeLogin = () => {
        navigate('/home'); // Navigate to /home when logging in as employee
    };

    const handleLogin = () => {
        if (id === savedAdminId && password === savedAdminPass) {
            navigate('/admin-home');
        } else {
            alert('Invalid admin credentials for login');
        }
    };

    const handlePasswordKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin(); // Trigger login action when Enter key is pressed
        }
    };

    const handleForgotPassword = () => {
        setShowInputBoxes(false); // Hide input boxes
        setShowSecurityQuestion(true); // Show security question
    };

    const handleSecurityAnswerSubmit = () => {
        if (parseInt(securityAnswer) === adminFavoriteNumber) {
            setShowSecurityQuestion(false); // Hide security question if the answer is correct
            setShowInputBoxes(true); // Show input boxes for password reset
        } else {
            alert("Incorrect answer. Please try again.");
        }
    };

    return (
        <section>
            <div className="signin">
                <div className="content">
                    <h2>AP & AP Corporation</h2>
                    <div className="form">
                        {showInputBoxes ? (
                            <>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        placeholder="Enter ID"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                    <i>Username</i>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handlePasswordKeyPress} // Listen for Enter key press in password field
                                    />
                                    <i>Password</i>
                                </div>
                                <div className="links">
                                    <a href="#" onClick={handleForgotPassword}>Forgot Password</a>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Login" onClick={handleLogin} />
                                </div>
                            </>
                        ) : showSecurityQuestion ? (
                            <>
                                <div className="securityQuestion">
                                    <p>What's the admin's favorite number?</p>
                                    <input
                                        type="number"
                                        value={securityAnswer}
                                        onChange={(e) => setSecurityAnswer(e.target.value)}
                                    />
                                    <button onClick={handleSecurityAnswerSubmit}>Submit</button>
                                </div>
                            </>
                        ) : (
                            <div className="links">
                                <div className="button-box">
                                    <button onClick={handleAdminLogin}>Login as Admin</button>
                                </div>
                                <div className="button-box">
                                    <button onClick={handleEmployeeLogin}>Login as Employee</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
