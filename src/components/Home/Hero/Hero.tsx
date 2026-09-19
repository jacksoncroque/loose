import backgound from '@/assets/images/background_menu.png';

import styles from './Hero.module.scss';

const Hero = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <img
               src={backgound}
               alt="backgound loose"
            />
         </div>
      </div>
   );
};

export default Hero;
