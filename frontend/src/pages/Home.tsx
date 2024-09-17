import React from 'react';
import Navbar from '../components/Navbar';
import ContentHome from '../components/ContentHome';
// import LoadingScreen from '../components/LoadingScreen';
import styles from './styles/Home.module.css';
// import { SpeedInsights } from "@vercel/speed-insights/react";

const Home: React.FC = () => {
  return (
    <div className={styles.homeStyle}>
      {/* <LoadingScreen> */}
        <Navbar />
        <ContentHome />
      {/* </LoadingScreen> */}
      {/* <SpeedInsights /> */}
    </div>
  );
};

export default Home;

