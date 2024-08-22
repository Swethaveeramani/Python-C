import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.navLink}>MyApp</Link>
      </div>
      <div style={styles.navItems}>
        <Link to="/login" style={styles.navButton}>Login</Link>
        <Link to="/signup" style={styles.signupButton}>Signup</Link>
        <Link to="/home" style={styles.navLink}>Home</Link>
        <Link to="/graph" style={styles.navLink}>Graph</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  navItems: {
    display: 'flex',
    gap: '10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 16px',
    backgroundColor: '#444',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  navButton: {
    padding: '8px 16px',
    color: '#fff',
    backgroundColor: '#ff3333',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  signupButton: {
    padding: '8px 16px',
    color: '#fff',
    backgroundColor: '#28a745',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
