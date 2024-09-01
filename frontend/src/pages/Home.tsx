import React from 'react';
import Navbar from '../components/Navbar';
import ContentHome from '../components/ContentHome';

const Home: React.FC = () => {
  const homeStyle: React.CSSProperties = {
    backgroundColor: '#232226',
    minHeight: '100vh',
    display: 'flex'
  };

  return (
    <div style={homeStyle}>
      <Navbar />
      <ContentHome />
    </div>
  );
};

export default Home;

