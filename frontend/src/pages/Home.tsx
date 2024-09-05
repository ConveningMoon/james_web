import React from 'react';
import Navbar from '../components/Navbar';
import ContentHome from '../components/ContentHome';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeStyle}>
      <Navbar />
      <ContentHome />
    </div>
  );
};

export default Home;

