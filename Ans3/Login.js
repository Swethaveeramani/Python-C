import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { name, email, password });
      localStorage.setItem('token', response.data.token);
      if (response.data.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Replace with your signup route
  };

  const containerStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const loginButtonStyle = {
    width: '48%',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '4%',
  };

  const signupButtonStyle = {
    width: '48%',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
 <Navbar/>
    <div style={containerStyle}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <div>
        <button onClick={handleLogin} style={loginButtonStyle}>Sign In</button>
        <button onClick={handleSignupRedirect} style={signupButtonStyle}>Sign Up</button>
      </div>
    </div>
    </>
  );
};

export default Login;
