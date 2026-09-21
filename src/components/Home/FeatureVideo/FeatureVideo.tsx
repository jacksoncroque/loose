import background from '@/assets/images/background_high.png';

import styles from './FeatureVideo.module.scss';

const FeatureVideo = () => {
   return (
      <div className={styles.container}>
         <img
            src={background}
            alt=""
         />
      </div>
   );
};

export default FeatureVideo;
