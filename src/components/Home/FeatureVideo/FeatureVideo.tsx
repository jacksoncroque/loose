import { Play } from 'lucide-react';
import styles from './FeatureVideo.module.scss';

const FeatureVideo = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperHigh}>
               <h1>alto.</h1>
               <span><Play /></span>
            </div>
            <div className={styles.containerWrapperDescription}>
               <p>
                  no <br></br>volume <br></br>na <br></br> cor. <br></br> na presença
               </p>
            </div>
         </div>
      </div>
   );
};

export default FeatureVideo;
