import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Fix this import

const SecondPage = () => {
  const history = useHistory();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      alert('Please enter your details before accessing this page.');
      history.push('/');
    }
  }, [history]);

  return (
    <div>
      <h1>Second Page</h1>
      <p>Welcome to the second page!</p>
    </div>
  );
};

export default SecondPage;
