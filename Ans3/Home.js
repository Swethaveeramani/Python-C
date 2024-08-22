import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  const users = [
    { sNo: 1, name: 'John Doe', email: 'john@example.com', count: 5, lastLogin: '2024-08-20' },
    { sNo: 2, name: 'Jane Smith', email: 'jane@example.com', count: 3, lastLogin: '2024-08-21' },
    { sNo: 3, name: 'Michael Johnson', email: 'michael@example.com', count: 7, lastLogin: '2024-08-22' },
    // Add more static data here if needed
  ];

  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>User Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S.No</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Count</th>
            <th style={styles.th}>Last Login Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.sNo}>
              <td style={styles.td}>{user.sNo}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.count}</td>
              <td style={styles.td}>{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
};

export default Home;
