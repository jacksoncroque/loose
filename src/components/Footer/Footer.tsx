import { FaFacebook } from 'react-icons/fa6';
import { TfiYoutube } from 'react-icons/tfi';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

import character from '@/assets/mockups/mascot.png';

import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <footer className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperHero}>
               <div className={styles.containerWrapperHeroAbout}>
                  <ul>
                     <li>sobre a loose.</li>
                     <li>notícias.</li>
                     <li>carreira.</li>
                     <li>sustentabilidade.</li>
                  </ul>
               </div>

               <div className={styles.containerWrapperHeroOrders}>
                  <ul>
                     <li>status do pedido.</li>
                     <li>entrega.</li>
                     <li>opções de pagamento.</li>
                     <li>
                        <img
                           src={character}
                           alt="mascote loose."
                        />
                     </li>
                  </ul>
               </div>

               <div className={styles.containerWrapperHeroBrand}>
                  <p>
                     marca brasileira de <br /> streetwear premium.
                  </p>
                  <p>
                     peças que duram mais que uma estação - <br /> e fazem você parecer mais
                     interessante <br />
                     do que parecia 5 minutos antes
                  </p>
               </div>

               <div className={styles.containerWrapperHeroContact}>
                  <span>
                     <FaTwitter size={30} />
                  </span>
                  <span>
                     <FaFacebook size={30} />
                  </span>
                  <span>
                     <TfiYoutube size={30} />
                  </span>
                  <span>
                     <FiInstagram size={30} />
                  </span>
               </div>
            </div>
            <div className={styles.containerWrapperFooter}>
               <p>&copy; {new Date().getFullYear()} loose,inc. todos os direitos reservados</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
