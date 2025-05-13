import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/loginpage.module.css';

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showInputBoxes, setShowInputBoxes] = useState(false);
    const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [savedPassword, setSavedPassword] = useState('0309');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const navigate = useNavigate();
    const savedAdminId = 'apnap';
    const adminFavoriteNumber = 502;

    const handleAdminLogin = () => {
        setShowInputBoxes(true);
    };

    const handleEmployeeLogin = () => {
        navigate('/home');
    };

    const handleLogin = () => {
        if (id === savedAdminId && password === savedPassword) {
            navigate('/admin-home');
        } else {
            alert('Invalid admin credentials for login');
        }
    };

    const handlePasswordKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const handleForgotPassword = () => {
        setShowInputBoxes(false);
        setShowSecurityQuestion(true);
    };

    const handleSecurityAnswerSubmit = () => {
        if (parseInt(securityAnswer) === adminFavoriteNumber) {
            setShowSecurityQuestion(false);
            setShowInputBoxes(false);
            setNewPassword('');
            setConfirmPassword('');
            setShowResetPassword(true);
        } else {
            alert("Incorrect answer. Please try again.");
        }
    };

    const handleResetPassword = () => {
        if (newPassword === confirmPassword) {
            setSavedPassword(newPassword);
            setShowResetPassword(false);
            setShowInputBoxes(true);
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match. Please try again.');
        }
    };

    return (
        <section>
            <div className={styles.signin}>
                <div className={styles.content}>
                    <h2>AP & AP Corporation</h2>
                    <div className={styles.form}>
                        {showInputBoxes ? (
                            <>
                                <div className={styles.inputBox}>
                                    <input
                                        type="text"
                                        placeholder="Enter ID"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                    <i>Username</i>
                                </div>
                                <div className={styles.inputBox}>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handlePasswordKeyPress}
                                    />
                                    <i>Password</i>
                                </div>
                                <div className={styles.links}>
                                    <a href="#" onClick={handleForgotPassword}>Forgot Password</a>
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="submit" value="Login" onClick={handleLogin} />
                                </div>
                            </>
                        ) : showSecurityQuestion ? (
                            <>
                                <div className={styles.inputBox}>
                                    <p>What is admin's favorite number?</p>
                                    <input
                                        type="number"
                                        value={securityAnswer}
                                        onChange={(e) => setSecurityAnswer(e.target.value)}
                                    />
                                    <i>Favourite Number</i>
                                    <hr></hr>
                                    <div className={styles.links}>
                                        <div className={styles.buttonBox}>
                                            <button onClick={handleSecurityAnswerSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : showResetPassword ? (
                            <>
                                <div className={styles.inputBox}>
                                    <input
                                        type="password"
                                        placeholder="Enter New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)} />
                                    <i>New Password</i>
                                </div>
                                <div className={styles.inputBox}>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <i>Confirm Password</i>
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="submit" value="Reset Password" onClick={handleResetPassword} />
                                </div>
                            </>
                        ) : (
                            <div className={styles.links}>
                                <div className={styles.buttonBox}>
                                    <button onClick={handleAdminLogin}>Login as Admin</button>
                                </div>
                                <div className={styles.buttonBox}>
                                    <button onClick={handleEmployeeLogin}>Login as Employee</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </section>
    );
}

export default LoginPage;
