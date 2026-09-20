import BrandStatment from './BrandStatment';
import Clothing from './Clothing';
import Collections from './Collections';
import FeatureVideo from './FeatureVideo';
import Hero from './Hero';

import styles from './Home.module.scss';
import Shoes from './Shoes';

const Home = () => {
   return (
      <div className={styles.container}>
         <Hero />
         <BrandStatment />
         <Collections />
         <FeatureVideo />
         <Shoes />
         <Clothing />
      </div>
   );
};

export default Home;
