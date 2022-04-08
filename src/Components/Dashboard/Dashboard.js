import React from 'react';
import FlightData from '../FlightData/FlightData';
import Pagination from '../Pagination/Pagination';

const Dashboard = () => {
  const user = localStorage.getItem('user');

  return (
    <div>
      <p
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          marginTop: '120px',
        }}
      >
        Welcome {user}
      </p>
      <Pagination flightData={FlightData} />
    </div>
  );
};

export default Dashboard;
