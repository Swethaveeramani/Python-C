import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(response.data);
      } catch (error) {
        alert('Failed to fetch user data');
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div style={styles.loading}>Loading...</div>;

  return (
    <>
    <Navbar/>
    <div style={styles.profileContainer}>
      <h2 style={styles.heading}>Profile</h2>
      <div style={styles.infoContainer}>
        <p style={styles.info}><strong>Name:</strong> {user.name}</p>
        <p style={styles.info}><strong>Email:</strong> {user.email}</p>
        <p style={styles.info}><strong>Gender:</strong> {user.gender}</p>
      </div>
    </div>
    </>
  );
};

const styles = {
  profileContainer: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
  },
  infoContainer: {
    textAlign: 'left',
  },
  info: {
    fontSize: '18px',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
  },
  loading: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#333',
    marginTop: '50px',
  },
};

export default Profile;
