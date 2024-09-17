import React, { useState } from 'react';
import styles from './styles/ContentHome.module.css';

const ContentHome: React.FC = () => {
  const [imgOpened, setImgOpened] = useState(false);
  const [imgName, setImageName] = useState('');
  const [isVerticalImg, setIsVerticalImg] = useState(true);

  // const imagesToLoad = [
  //   '/bachelor_degree.jpg', 
  //   '/entrepreneurship_certificate.jpg',
  //   '/startup_as_degree_program.jpg',
  //   '/startup_guide_program.jpg',
  //   '/programming_specialist.jpg',
  //   '/AI_concourse.jpg',
  //   '/russian_certificate.jpg'
  // ];

  function onCloseImage(): void {
    setImgOpened(false);
  };

  function onOpenImage(image: string, vertical: boolean): void {
    setImgOpened(true);
    setImageName(image)
    setIsVerticalImg(vertical);
  };

  return (
    <div>
      <main className={styles.mainContent}>
        <section className={styles.contentSection} id='about'>
          <h1 className={styles.contentTitle}>Who I am?</h1>
          <p className={styles.description}>Highly skilled Software Engineer specializing in the creation of mobile applications using <b>React Native</b>, and in web development for both frontend with <b>React.js</b> and backend with <b>Node.js</b>. I am proficient in key technologies such as <b>Python, HTML, CSS, JavaScript, and SQL</b>. My experience also includes managing cloud environments and services like <b>Linux</b>, <b>Google Cloud</b>, <b>Yandex Cloud</b> and <b>Firebase</b>, demonstrating an adaptive capability in constantly evolving technologies.
            <br /><br />My professional journey encompasses extensive experience in sales, digital marketing, and photography, both at a corporate and freelance level. I have implemented successful lead generation campaigns through the creation of effective sales funnels, optimized with Google Ads and Facebook Ads, and led websites that I have designed myself. I possess advanced skills in <b>Adobe Premiere Pro</b> and <b>Photoshop</b>, which complement my ability to produce attractive and professional content.
            <br /><br />As a trilingual professional in <b>Spanish</b>, <b>English</b>, <b>Russian</b>, I have effective communication skills that facilitate my integration into multicultural work teams. Emotional intelligence guides my approach to collaborative work, allowing me to address situations with empathy and leadership. I excel in critical and self-taught thinking, as well as problem-solving skills, facing challenges with creativity and innovation to achieve outstanding results.
            <br /><br />Committed to self-efficacy and continuous improvement, I always seek to learn from new experiences to apply those learnings to changing environments. My motivation and results orientation are reflected in my ability to strategically plan and organize tasks, fulfilling with impeccable ethics and professional responsibility. I am ready to bring loyalty and dedication to the next challenge I face in my career, providing technological solutions that positively impact the business and the client.  
          </p>
        </section>
        <section className={styles.contentSection} id='experience'>
          <h1 className={styles.contentTitle}>Experience</h1>
          <div className={styles.workContainer}>
            <div className={styles.workTitleContainer}>
              <h2 className={styles.workTitle}>Multimedia Tools and Programming Teacher • ITgenio</h2>
              <h2 className={styles.workTime}>12/2022 - Present</h2>
            </div>
            <p className={styles.workDescription}>
              As a teacher, I managed student behavioral issues to enhance the digital classroom environment while motivating and engaging students to build a strong academic foundation. I taught various programming languages and multimedia creation tools, including Python, C#, JavaScript, C++, Lua, Scratch, Photoshop, and Premiere Pro, and also served as a Spanish teacher. I engaged students in critical thinking skills through inquiry-based activities that fostered creative problem solving. Additionally, I provided feedback to parents regarding student academic growth and behavioral development and evaluated academic progress, preparing reports for parents or guardians.           
            </p>
          </div>        
          <div className={styles.workContainer}>
            <div className={styles.workTitleContainer}>
              <h2 className={styles.workTitle}>Sales Specialist • Absolute</h2>
              <h2 className={styles.workTime}>05/2022 - 11/2022</h2>
            </div>
            <p className={styles.workDescription}>
              I effectively communicated product features, advantages, and benefits to customers, while developing and implementing successful sales strategies to expand the customer base and market share. I also contributed to training new sales representatives in appropriate sales techniques, specializing in phone sales and commission earnings. Additionally, I utilized CRM software to manage customer interactions, update account information, and generate leads, consistently closing sales deals efficiently and surpassing sales targets and quotas.
            </p>
          </div>    
          <div className={styles.workContainer}>
            <div className={styles.workTitleContainer}>
              <h2 className={styles.workTitle}>Marketing Manager • Freelance</h2>
              <h2 className={styles.workTime}>11/2019 - 05/2022</h2>
            </div>
            <p className={styles.workDescription}>
              I developed and executed promotional campaigns that successfully generated leads and boosted sales, while also nurturing and maintaining strong relationships with clients and partners. I leveraged social media platforms to enhance brand visibility and contributed to the development of a consistent brand message across various channels. Additionally, I designed web pages for effective lead capture and utilized advertising and market analysis tools like Facebook Ads and Google Ads. With a deep expertise in photography and design, I created diverse multimedia content to promote both physical and digital products.
            </p>
          </div>   
        </section>  
        {imgOpened &&
          <div className={styles.overlay} onClick={onCloseImage}>
              <img src={imgName} alt="ImageOpened" className={isVerticalImg ? styles.projectImage_openedV : styles.projectImage_openedH} onClick={onCloseImage}/>
          </div> 
        }       
        <section className={styles.contentSection} id='projects'>
          <h1 className={styles.contentTitle}>PROJECTS AND CERTIFICATES</h1>
          <div className={styles.project_1_Container}>      
            <div className={styles.project_1_ImageContainer}>
              <img src="/bachelor_degree.webp" alt="BachelorDegree" className={styles.projectImage_closed} onClick={() => onOpenImage("/bachelor_degree.webp", false)}/>
              <img src="/entrepreneurship_certificate.webp" alt="EntrepreneurshipCertificate" className={styles.projectImage_closed} onClick={() => onOpenImage("/entrepreneurship_certificate.webp", false)} loading='lazy'/>
              <img src="/startup_as_degree_program.webp" alt="StartupAsDegreeProgram" className={styles.projectImage_closed} onClick={() => onOpenImage("/startup_as_degree_program.webp", false)} loading='lazy'/>
              <img src="/startup_guide_program.webp" alt="StartupGuideProgram" className={styles.projectImage_closed} onClick={() => onOpenImage("/startup_guide_program.webp", false)} loading='lazy'/>
            </div>
            <div className={styles.projectDescriptionContainer} style={{marginLeft: '0'}}>
              <h2 className={styles.projectTitle}>LUPA • Full-Stack Project with AI</h2>
              <p className={styles.projectDescription}>
                Bachelor's degree in Software Engineering, during which I developed a range of projects utilizing various programming languages and environments, demonstrating skills essential for a full-stack developer. For my final project, I engineered an application named "Lupa" using <b>React Native</b>, hosted on <b>Firebase</b>. This application interfaces with a <b>Python</b> program I designed, which features an <b> artificial intelligence </b> model, personally trained by me, for <b>Facial Emotion Recognition (FER)</b>.
                <br /><br />This project was delivered as a capstone graduation project in a startup format, and it participated in a national startup competition where it earned multiple awards and certifications. The project adhered to procedures encompassing not only engineering but also modeling and the processes involved in establishing companies at technological and educational levels. Additionally, a marketing and advertising strategy was developed, grounded in scientific research and market analysis, to attract customers in an emerging market.                
              </p>      
            </div>           
          </div>
          <div className={styles.project_2_Container}>
            <img src="/programming_specialist.webp" alt="ProgrammingSpecialist" className={styles.projectImage_closed} onClick={() => onOpenImage("/programming_specialist.webp", false)} loading='lazy'/>
            <div className={styles.projectDescriptionContainer}>
              <h2 className={styles.projectTitle}>Specialization in programming • Multiple Small Projects</h2>
              <p className={styles.projectDescription}>
                Proficient in programming, with experience in a diverse range of projects, including the development of synthetic databases, implementation of AI models, design of REST APIs, creation of user interfaces for restaurant applications, and conducting process simulations for analytical purposes. These projects were executed using a variety of programming languages and technologies.
              </p>      
            </div>           
          </div>
          <div className={styles.projects_3_Container}>
            <div className={styles.project_3_SubContainer}>
              <img src="/AI_concourse.webp" alt="AIConcourse" className={styles.projectImage_closed} onClick={() => onOpenImage("/AI_concourse.webp", true)} loading='lazy'/>
              <div className={styles.projectDescriptionContainer}>
                <h2 className={styles.projectTitle}>Post Office Work Process • AnyLogic AI Simulation</h2>
                <p className={styles.projectDescription}>
                  Developed a process simulation project utilizing AI and JavaScript within the AnyLogic platform, which earned first place for best project at a Hackathon focused on creating a question and answer system.              
                </p>      
              </div>           
            </div>
            <div className={styles.project_3_SubContainer}>
              <img src="/russian_certificate.webp" alt="RussianCertificate" className={styles.projectImage_closed} onClick={() => onOpenImage("/russian_certificate.webp", true)} loading='lazy'/>
              <div className={styles.projectDescriptionContainer}>
                <h2 className={styles.projectTitle}>Russian Engineering Certificate • Professional Ability to Work in Russian Language </h2>
                <p className={styles.projectDescription}>
                  Russian language B2 level certificate in engineering skills.                
                </p>      
              </div>           
            </div>            
          </div>
        </section>
      </main>
      <footer className={styles.footerContainer}>
        <p className={styles.footerText}>
          Hosted on Vercel | Built using React.js and TypeScript for the frontend, Node.js for the backend, and CSS for the styles.
        </p>
      </footer>
    </div>
  );
};
  
  export default ContentHome;