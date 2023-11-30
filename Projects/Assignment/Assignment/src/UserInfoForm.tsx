import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface UserInfo {
  name: string;
  phoneNumber: string;
  email: string;
}

interface UserInfoFormProps {
  onSave: (userInfo: UserInfo) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, phoneNumber, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Save and Continue
      </Button>
    </form>
  );
};

export default UserInfoForm;
