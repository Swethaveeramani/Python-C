import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/signup', { name, email, password, gender });
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
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
    border: '1px solid black',
  };

  const signupButtonStyle = {
    width: '48%',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '4%',
  };

  const signinButtonStyle = {
    width: '48%',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
    <Navbar/>
    <div style={containerStyle}>
      <h2>Signup</h2>
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
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div>
        <button onClick={handleSignup} style={signupButtonStyle}>Signup</button>
        <button style={signinButtonStyle}>Sign In</button>
      </div>
    </div>
    </>
  );
};

export default Signup;
