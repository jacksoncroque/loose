import BrandStatment from './BrandStatment';
import Collections from './Colections';
import Hero from './Hero';

import styles from './Home.module.scss';

const Home = () => {
   return (
      <div className={styles.container}>
         <Hero />
         <BrandStatment />
         <Collections />
      </div>
   );
};

export default Home;
