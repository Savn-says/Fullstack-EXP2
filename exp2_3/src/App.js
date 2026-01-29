import React from 'react';
import { Button, TextField } from '@mui/material';  // Importing Button and TextField from Material UI
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Welcome to Material UI</h1>
      <Button variant="contained" color="primary" onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
      <br /><br />
      <TextField label="Enter your name" variant="outlined" fullWidth />
    </div>
  );
}

export default App;
