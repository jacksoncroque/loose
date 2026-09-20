import bgYellow from '@/assets/mockups/bgYellow.png';
import campaignClothing from '@/assets/mockups/campaignClothing.png';

import styles from './Clothing.module.scss';

const Clothing = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperYellow}>
               <img
                  src={bgYellow}
                  alt="a roupa veste você. não o contrário"
               />
            </div>
            <div className={styles.containerWrapperImage}>
               <img src={campaignClothing} alt="wear it loose. live it loud" />
            </div>
         </div>
      </div>
   );
};

export default Clothing;
