import React from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from './Navbar';

const Graph = () => {
  const totalUserCount = 3; 
  const totalClickCount = 15; 

  const data = {
    labels: ['John Doe', 'Jane Smith', 'Michael Johnson'],
    datasets: [
      {
        label: 'Click Count',
        data: [5, 3, 7], // Corresponding click counts
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        borderColor: ['#ff6384', '#36a2eb', '#ffce56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>User Statistics</h2>
      <div style={styles.stats}>
        <div style={styles.statBox}>
          <h3>Total User Count</h3>
          <p>{totalUserCount}</p>
        </div>
        <div style={styles.statBox}>
          <h3>Total Click Count</h3>
          <p>{totalClickCount}</p>
        </div>
      </div>
      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
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
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  statBox: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '200px',
  },
  chartContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Graph;
