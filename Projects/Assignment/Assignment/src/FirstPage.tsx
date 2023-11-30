import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Fix this import
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FirstPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      history.push('/second');
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div>
      <h1>First Page</h1>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </div>
  );
};

export default FirstPage;
