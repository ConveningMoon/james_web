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
          <p className={styles.description}>
            Passionate Software Engineer with <b>3 years</b> of experience in <b>full-stack development</b>, 1 year in <b>AI integration</b>, 3 years in <b>sales</b> and 7 years of <b>multimedia creation</b>. Fluent in <b>Spanish, English, and Russian</b>, enabling effective collaboration in multicultural environments. Seeking to contribute technical expertise and innovative mindset to a forward-thinking team.
            Developed an AI-enhanced educational platform for my bachelor's project, connecting teachers and students through a React Native app and a Python desktop program with a Facial Emotion Recognition (FER) model. I taught over 500 students in programming and multimedia, creating teams and preparing them for hackathons. Contributed to over $100,000 per month in sales as part of a sales team. As a freelance marketing manager, it generated more than $180,000 in digital product sales over five years. Fluent in Spanish, English, and Russian.
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
              Educated over 500 students aged 7 to 21, delivering engaging lessons in Python, C#, JavaScript, C++, React.js, App Inventor, and Scratch, as well as creative subjects like Photoshop and video editing with Premiere Pro. Additionally, taught native Spanish and facilitated learning in both English and Russian, broadening cultural sensitivity and communication skills. Developed customized educational modules that <b><i>boosted student engagement by 35%</i></b>. Formed and mentored student teams for hackathons, leading to several winning regional accolades. Provided personalized guidance, resulting in an average <b><i>student project enhancement of 25%</i></b>.         
            </p>
          </div>        
          <div className={styles.workContainer}>
            <div className={styles.workTitleContainer}>
              <h2 className={styles.workTitle}>Sales Specialist • Absolute</h2>
              <h2 className={styles.workTime}>05/2022 - 11/2022</h2>
            </div>
            <p className={styles.workDescription}>
              During my tenure as a sales specialist, I played a crucial role in collaborating with a team to generate over <b><i>$100,000 in monthly revenue</i></b>. By consistently surpassing my individual sales targets by an <b><i>average of 15%</i></b>, I contributed significantly to our team’s success. I introduced a client engagement strategy that led to a <b><i>remarkable 45% increase</i></b> in customer acquisition. Additionally, I took the initiative to train and mentor five new sales representatives, streamlining their <b><i>onboarding process by 30%</i></b> and enhancing overall team efficiency. My experience utilized <b><i>CRM software</i></b> to optimize customer interactions and maintain up-to-date account information, ensuring a high level of client satisfaction and loyalty.
            </p>
          </div>    
          <div className={styles.workContainer}>
            <div className={styles.workTitleContainer}>
              <h2 className={styles.workTitle}>Marketing Manager • Freelance</h2>
              <h2 className={styles.workTime}>11/2019 - 05/2022</h2>
            </div>
            <p className={styles.workDescription}>
              In my role as a freelance Marketing Manager, I achieved over <b><i>$180,000 in sales</i></b> of digital products related to programming and photography over five years. I developed highly effective digital marketing strategies that increased <b><i>product visibility by 40%</i></b>. Utilizing social media and cutting-edge SEO strategies, I boosted <b><i>website traffic by 50% and drove a 35% increase in conversion rates</i></b>.
              I designed engaging web pages for lead capture and employed targeted campaign tools like <b><i>Facebook Ads and Google Ads</i></b> to maximize reach and ROI. My expertise in photography and design enabled me to craft compelling multimedia content tailored to diverse audiences. I nurtured strong client relationships, maintaining a <b><i>95% retention rate</i></b> through exceptional service and value delivery.            
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
              <img src="/bachelor_degree_small.webp" alt="BachelorDegree" className={styles.projectImage_closed} onClick={() => onOpenImage("/bachelor_degree.webp", false)}/>
              <img src="/entrepreneurship_certificate_small.webp" alt="EntrepreneurshipCertificate" className={styles.projectImage_closed} onClick={() => onOpenImage("/entrepreneurship_certificate.webp", false)} loading='lazy'/>
              <img src="/startup_as_degree_program_small.webp" alt="StartupAsDegreeProgram" className={styles.projectImage_closed} onClick={() => onOpenImage("/startup_as_degree_program.webp", false)} loading='lazy'/>
              <img src="/startup_guide_program_small.webp" alt="StartupGuideProgram" className={styles.projectImage_closed} onClick={() => onOpenImage("/startup_guide_program.webp", false)} loading='lazy'/>
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
            <img src="/programming_specialist_small.webp" alt="ProgrammingSpecialist" className={styles.projectImage_closed} onClick={() => onOpenImage("/programming_specialist.webp", false)} loading='lazy'/>
            <div className={styles.projectDescriptionContainer}>
              <h2 className={styles.projectTitle}>Specialization in programming • JS, C++, C, C#. HTML/CSS</h2>
              <p className={styles.projectDescription}>
                Proficient in programming, with experience in a diverse range of projects, including the development of synthetic databases, implementation of <b>AI models</b>, design of <b>REST APIs</b>, creation of user interfaces for restaurant applications, and conducting process simulations for analytical purposes. These projects were executed using a variety of programming languages and technologies.
              </p>      
            </div>           
          </div>
          <div className={styles.projects_3_Container}>
            <div className={styles.project_3_SubContainer}>
              <img src="/AI_concourse_small.webp" alt="AIConcourse" className={styles.projectImage_closed} onClick={() => onOpenImage("/AI_concourse.webp", true)} loading='lazy'/>
              <div className={styles.projectDescriptionContainer}>
                <h2 className={styles.projectTitle}>Post Office Work Process • AnyLogic AI Simulation</h2>
                <p className={styles.projectDescription}>
                  Developed a process simulation project utilizing AI and JavaScript within the <b>AnyLogic</b> platform, which earned first place for best project at a Hackathon focused on creating a question and answer system.              
                </p>      
              </div>           
            </div>
            <div className={styles.project_3_SubContainer}>
              <img src="/russian_certificate_small.webp" alt="RussianCertificate" className={styles.projectImage_closed} onClick={() => onOpenImage("/russian_certificate.webp", true)} loading='lazy'/>
              <div className={styles.projectDescriptionContainer}>
                <h2 className={styles.projectTitle}>Russian Engineering Certificate • Professional Ability to Work in Russian Language </h2>
                <p className={styles.projectDescription}>
                  Russian language <b>B2 level</b> certificate in engineering skills.                
                </p>      
              </div>           
            </div>            
          </div>
          <div className={styles.project_1_Container}>      
            <div className={styles.projectDescriptionContainer} style={{marginLeft: '0'}}>
              <h2 className={styles.projectTitle}>General Intelligence Assessment (GIA)</h2>
              <p className={styles.projectDescription}>
                • <b>REASONING:</b> James demonstrates a superior ability to reason quickly and accurately from verbal information, outperforming the majority of people. He excels at holding information in short-term memory and drawing accurate conclusions during conversations.
                <br />
                • <b>WORD MEANING:</b> He possesses a broad vocabulary and a high level of comprehension of complex written and verbal information. James is likely to use sophisticated terms in both speech and writing.
                <br />
                • <b>SPATIAL VISUALISATION:</b> His ability to visualize and manipulate images and concepts mentally is higher than most. James can easily interpret complex visual data such as graphs, charts, maps, and blueprints.
                <br />
                • <b>PERCEPTUAL SPEED:</b> James is on par with the majority in quickly and accurately identifying errors and inconsistencies in written material, numbers, and diagrams.
                <br />
                • <b>NUMBER SPEED & ACCURANCY:</b> His capacity to manipulate numerical information and work with quantitative concepts matches that of most people, allowing him to process numbers and perform mental calculations effectively.
                <br /><br />
                <a href="https://drive.google.com/file/d/1IRwNwpx3j46OWmYXrfkqf5-1TqrlEg1z/view?usp=drive_link" rel='GIA_Result' className={styles.GIA_Link}>Download & See Result</a>
              </p>      
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