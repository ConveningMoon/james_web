import React, { useState } from 'react';
import api from '../services/api';

const TestConnection: React.FC = () => {
  const [message, setMessage] = useState('');

  const testConnection = async () => {
    try {
      const response = await api.get('/test');
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error connecting to backend", error);
      setMessage('Error connecting to backend');
    }
  };

  return (
    <div>
      <button onClick={testConnection}>Test Connection</button>
      <p>{message}</p>
    </div>
  );
};

export default TestConnection;
