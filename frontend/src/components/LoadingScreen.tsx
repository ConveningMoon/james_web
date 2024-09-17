import React, { useState, useEffect, ReactNode } from 'react';
import styles from './styles/LoadingScreen.module.css';

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return (
        <div className={styles.loader}>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
          <div className={styles.loaderSquare}></div>
        </div>
      );
    }
  
    return <>{children}</>;
};

export default LoadingScreen;
