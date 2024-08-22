import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin-dashboard', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUsers(response.data);
        generateChartData(response.data);
      } catch (error) {
        alert('Failed to fetch user data');
      }
    };

    const generateChartData = (users) => {
      const dates = users.map(user => new Date(user.lastLogin).toDateString());
      const counts = dates.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      setChartData({
        labels: Object.keys(counts),
        datasets: [{
          label: 'User Count',
          data: Object.values(counts),
          backgroundColor: 'rgba(75,192,192,0.6)',
        }]
      });
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <Bar data={chartData} />
      <ul>
        {users.map(user => (
          <li key={user.email}>
            {user.name} - {user.email} - {user.gender} - {new Date(user.lastLogin).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
