import background from '@/assets/images/background_menu.png';

import Button from '@/components/Button';

import styles from './Hero.module.scss';

const Hero = () => {
   return (
      <section className={styles.container}>
         <img
            src={background}
            alt="pessoa de skate"
            aria-hidden="true"
         />

         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperNews}>
               <div className={styles.containerWrapperNewsHeader}>
                  <Button
                     label="DROP 04"
                     customStyle={styles.containerWrapperNewsHeaderButton}
                  />

                  <h1>pôr-do-sol</h1>
                  <h1>no centro.</h1>

                  <p>“a coleção que veste a hora de ouro”</p>

                  <span />
               </div>

               <div className={styles.containerWrapperNewsDescription}>
                  <h2>12 peças. tudo limitado.</h2>

                  <p>
                     friozinho de junho. desenhada com referências do skate, cores quentes, tecidos
                     pesados, peças que aguentam o paulistano e da estação da luz num sábado de
                     tarde.
                  </p>

                  <Button
                     label="quero."
                     customStyle={styles.containerWrapperNewsDescriptionButton}
                  />
               </div>
            </div>

            <footer className={styles.containerWrapperFooter}>
               <div className={styles.containerWrapperFooterInfos}>
                  <h2>
                     moda séria <br />é chata.
                  </h2>

                  <h2>chegou drop novo. corre.</h2>

                  <h2>disponível a partir de quinta · 18h</h2>
               </div>
            </footer>
         </div>
      </section>
   );
};

export default Hero;
