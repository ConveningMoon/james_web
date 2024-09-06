import React, { Suspense } from 'react';
// import Navbar from '../components/Navbar';
// import ContentHome from '../components/ContentHome';
import styles from './styles/Home.module.css';
// import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load the ContentHome component
const LazyContentHome = React.lazy(() => import('../components/ContentHome'));
const LazyNavbar = React.lazy(() => import('../components/Navbar'));

const Home: React.FC = () => {
  return (
    <div className={styles.homeStyle}>
      {/* <Navbar />
      <ContentHome /> */}
      <Suspense fallback={<div>Loading content...</div>}>
        <LazyNavbar />
        <LazyContentHome />
      </Suspense>
      {/* <SpeedInsights /> */}
    </div>
  );
};

export default Home;

