import React from 'react';
import styles from './styles/Navbar.module.css';
import ClickableIcon from './ClickableIcon';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar: React.FC = () => {
  const handleGitHubIconClick = () => {
    window.open('https://github.com/ConveningMoon', '_blank');
  };

  const handleLinkedinIconClick = () => {
    window.open('https://www.linkedin.com/in/dylan-vergara-470603163/', '_blank');
  };

  const handleEmailIconClick = () => {
    window.location.href = 'mailto:dj.vergara@hotmail.com';
  };

  return ( 
    <header className={styles.header}>
      <section className={styles.personalInfo}>
        <div className={styles.portraitContainer}>
          <img src='/menExample.jpg' alt='MePortrait' className={styles.userImage} /> 
        </div>
        <div className={styles.meContainer}>
          <div className={styles.meInfoContainer}>
            <h1 className={styles.myName}>James Dylan Vergara Cofre</h1>
            <h2 className={styles.myProfession}>Software Enginner</h2>
          </div>
          <nav className={styles.navbar}>
              <ul className={styles.navLinks}>
                <li><a href="#about" className={styles.link}>ABOUT ME</a></li>
                <li><a href="#experience" className={styles.link}>EXPERIENCE</a></li>
                <li><a href="#projects" className={styles.link}>PROJECTS & CERTIFICATES</a></li>                      
              </ul>
            </nav>
          <div className={styles.meContactContainer}>
            <ClickableIcon onClick={handleGitHubIconClick} size={25} color='#3e5954' icon={FaGithub}/>
            <ClickableIcon onClick={handleLinkedinIconClick} size={25} color='#3e5954' icon={FaLinkedin}/>
            <ClickableIcon onClick={handleEmailIconClick} size={28} color='#3e5954' icon={IoMdMail}/>
          </div>
        </div>         
      </section>          
    </header>
  );
}

export default Navbar;
