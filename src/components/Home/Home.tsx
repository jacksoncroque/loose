import BrandStatment from './BrandStatment';
import Hero from './Hero';

import styles from './Home.module.scss';

const Home = () => {
   return (
      <div className={styles.container}>
         <Hero />
         <BrandStatment />
      </div>
   );
};

export default Home;
