import React, { useState } from 'react';
import api from '../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/register', { email, password, name });
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
