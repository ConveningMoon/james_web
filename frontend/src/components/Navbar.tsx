import React from 'react';
import styles from './styles/Navbar.module.css';
import ClickableIcon from './ClickableIcon';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const handleIconClick = () => {
    alert('Icon clicked!');
  };

  return ( 
    <header className={styles.header}>
      <section className={styles.personalInfo}>
        <img src='/menExample.jpg' alt='MePortrait' className={styles.userImage} />  
        <h1 className={styles.myName}>James Dylan Vergara Cofre</h1>
        <h2 className={styles.myProfession}>Software Enginner</h2>
        <div className={styles.icon}>
          <ClickableIcon onClick={handleIconClick} size={25} color='#3e5954' icon={FaGithub}/>
          <ClickableIcon onClick={handleIconClick} size={25} color='#3e5954' icon={FaLinkedin}/>
        </div>
      </section>     
      {/* <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.link}>ABOUT ME</a></li>
          <li><a href="#projects" className={styles.link}>PROJECTS</a></li>
          <li><a href="#preparation" className={styles.link}>PREPARATION</a></li>
          <li><a href="#experience" className={styles.link}>EXPERIENCE</a></li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Navbar;
