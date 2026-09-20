import BrandStatment from './BrandStatment';
import Clothing from './Clothing';
import Collections from './Collections';
import FeatureVideo from './FeatureVideo';
import Hero from './Hero';

import styles from './Home.module.scss';
import Products from './Products';
import Shoes from './Shoes';

const Home = () => {
   return (
      <main className={styles.container}>
         <Hero />
         <BrandStatment />
         <Collections />
         <FeatureVideo />
         <Shoes />
         <Clothing />
         <Products />
      </main>
   );
};

export default Home;
