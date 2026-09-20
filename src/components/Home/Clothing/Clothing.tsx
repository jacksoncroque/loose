import clothing from '@/assets/mockups/clothing.png';
import skater from '@/assets/mockups/skater_clothing.png';
import skaterLaydown from '@/assets/mockups/skater_clothing_laydown.png';
import shoes from '@/assets/mockups/shoes.png';
import skaterPurple from '@/assets/mockups/skater_purple.png';

import styles from './Clothing.module.scss';

const Clothing = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperYellow}>
               <img
                  src={skater}
                  alt="mascote"
                  className={styles.skater}
               />
               <img
                  src={skaterLaydown}
                  alt="mascote"
                  className={styles.skaterLaydown}
               />
               <img
                  src={shoes}
                  alt="mascote"
                  className={styles.stamp}
               />

               <span></span>

               <h1>a roupa veste você.</h1>
               <h1>
                  não o<br></br>contrário
               </h1>

               <span></span>
            </div>
            <div className={styles.containerWrapperImage}>
               <img
                  src={clothing}
                  alt="clothing"
               />

               <img
                  src={shoes}
                  alt="mascote"
                  className={styles.stampImage}
               />

               <img
                  src={skaterPurple}
                  alt="mascote"
                  className={styles.skaterPurple}
               />

               <h2>wear it loose</h2>
               <h2>live it loud</h2>
            </div>
         </div>
      </div>
   );
};

export default Clothing;
