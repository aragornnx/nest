import React from 'react';
import { Paper, Typography } from '@mui/material';
import Calendar from '../components/Calendar';

const Dashboard = () => {
  const events = [
    { title: 'Etkinlik 1', date: '2024-07-23' },
    { title: 'Etkinlik 2', date: '2024-07-24' },
  ];

  return (
    <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'white' }}>
      <Typography variant="h4" color="primary">
        Dashboard
      </Typography>
      <Calendar events={events} />
    </Paper>
  );
};

export default Dashboard;