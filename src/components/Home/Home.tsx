import BrandStatment from './BrandStatment';
import Collections from './Colections';
import FeatureVideo from './FeatureVideo';
import Hero from './Hero';

import styles from './Home.module.scss';

const Home = () => {
   return (
      <div className={styles.container}>
         <Hero />
         <BrandStatment />
         <Collections />
         <FeatureVideo />
      </div>
   );
};

export default Home;
