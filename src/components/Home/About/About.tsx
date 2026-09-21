import character from '@/assets/mockups/skaterSitDown.png';
import model from '@/assets/mockups/skater_boy.jpg';

import styles from './About.module.scss';

const About = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperLeft}>
               <h1>sobre a loose.</h1>

               <p>
                  criada em 2026, a loose é uma marca feita para você que curte o streetwear, o
                  skate, pra quem não quer passar despercebido. unimos o skate de fim de tarde, o
                  show de quinta no centro e a primeira grana do freela em um lugar só, loose não é
                  uma marca, é um estilo.
               </p>

               <div className={styles.containerWrapperLeftMission}>
                  <p>MISSÃO</p>
                  <h2>o que fazemos</h2>

                  <p>
                     vestir o jovem urbano com <br /> peças que entregam atitude, <br />{' '}
                     <strong>qualidade e identidade</strong>
                  </p>

                  <img
                     src={character}
                     alt="mascote"
                  />
               </div>

               <div className={styles.containerWrapperLeftVision}>
                  <p>VISÃO</p>
                  <h2>onde queremos chegar</h2>

                  <p>
                     ser, até 2030,a marca de <br /> streetwear premium mais <br />{' '}
                     <strong>relevante da américa latina</strong>
                  </p>
               </div>
            </div>
            <div className={styles.containerWrapperRight}>
               <img
                  src={model}
                  alt="skatista usando loose."
               />
            </div>
         </div>
      </div>
   );
};

export default About;
