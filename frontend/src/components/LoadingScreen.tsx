import React, { useState, useEffect, ReactNode } from 'react';
import styles from './styles/LoadingScreen.module.css';

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate a network request or some asynchronous operations
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust the time as necessary to represent loading time
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return (
        <div className={styles.loadingScreen}>
          <div className={styles.spinner}></div>
          <p>Loading, please wait...</p>
        </div>
      );
    }
  
    return <>{children}</>; // Render child components once loading is false
};

export default LoadingScreen;
