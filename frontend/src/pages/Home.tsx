import React from 'react';
import Navbar from '../components/Navbar';
import ContentHome from '../components/ContentHome';
import styles from './styles/Home.module.css';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Home: React.FC = () => {
  return (
    <div className={styles.homeStyle}>
      <Navbar />
      <ContentHome />
      <SpeedInsights />
    </div>
  );
};

export default Home;

