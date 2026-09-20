import backgound from '@/assets/images/background_shoes.png';
import mockup from '@/assets/mockups/shoes_mockup.png';
import shoes from '@/assets/mockups/shoes.png';
import smile from '@/assets/mockups/smile.png';

import styles from './Shoes.module.scss';
import Button from '@/components/Button';

const Hero = () => {
   return (
      <div className={styles.container}>
         <img
            src={backgound}
            alt="backgound loose"
         />

         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperTitle}>
               <h1>tênis.</h1>
               <img
                  src={shoes}
                  alt="selo loose."
               />
            </div>

            <div className={styles.containerWrapperImage}>
               <img
                  src={mockup}
                  alt="tênis"
               />

               <img
                  src={smile}
                  alt="smile"
               />

               <p>"é o tênis que você usa</p>
               <p>
                  pra <br></br>apresentação de <br></br>TCC."
               </p>
            </div>

            <div className={styles.containerWrapperFooter}>
               <h1>entre em contato com o que lhe faz bem.</h1>
               <p>Porque todos deveriam conhecer a sensação de ter aquele perfeito</p>
               <Button label="encontre seu tênis" customStyle={styles.containerWrapperFooterButton}/>
            </div>
         </div>
      </div>
   );
};

export default Hero;
