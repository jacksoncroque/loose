import bag from '@/assets/collections/bag.png';
import fullbody from '@/assets/collections/fullbody.png';
import glasses from '@/assets/collections/glasses.png';
import tshirt from '@/assets/collections/tshirt.png';
import concept from '@/assets/mockups/concept_1.png';
import smile from '@/assets/mockups/smile.png';

import styles from './Collections.module.scss';

const Collections = () => {
   return (
      <div className={styles.container}>
         <img
            src={concept}
            alt="imagem abstrata"
         />

         <div className={styles.containerWrapper}>
            <h1>coleções.</h1>

            <div className={styles.containerWrapperCollection}>
               {[tshirt, glasses, fullbody, bag].map((item) => (
                  <div
                     key={item}
                     className={styles.containerWrapperCollectionItem}
                  >
                     <img
                        src={item}
                        alt={item}
                     />
                  </div>
               ))}
            </div>

            <img
               src={smile}
               alt="smile"
               className={styles.containerWrapperSmile}
            />
         </div>
      </div>
   );
};

export default Collections;
