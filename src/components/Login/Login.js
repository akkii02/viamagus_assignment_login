import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import img1 from "../../images/Rectangle 4.png"
import img2 from "../../images/Group 2.svg";
import amoImg from "../../images/pngwing.com (1).png"
import googleIcon from  "../../images/Group 9@2x.png"
import FacIcon from  "../../images/Rectangle 17@2x.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      setSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setSuccess(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one letter and one number');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
    navigate("/home");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={amoImg} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
            <p className={styles.head}>Login</p>
          <img src={img1} alt="Welcome" className={styles.image} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className={styles.error}>
            <img src={img2} alt='IMG' />
            {error}</p>}
          {success && <p className={styles.success}>Login successful!</p>}

          <button type="submit" className={styles.loginButton}>Sign In</button>
        </form>

        <div className={styles.links}>
          <a href="/forgot-password" className={styles.link}>Forgot Password?</a>
          <a href="/signup" className={styles.newLink}>New User? Sign Up</a>
        </div>
<p className={styles.divider}>or</p>
        <div className={styles.socialButtons}>
          <button className={`${styles.socialButton} ${styles.googleButton}`}>
            
            <img src={googleIcon} alt='GoogleIcon'  className={styles.icons} />
            <p className={styles.socialMediaText}>Continue with Google</p>
          </button>
          <button className={`${styles.socialButton} ${styles.facebookButton}`}>
          <img src={FacIcon} alt='GoogleIcon'  className={styles.icons} />
          <p className={styles.socialMediaText}>Continue with Facebook</p>
            
          </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
