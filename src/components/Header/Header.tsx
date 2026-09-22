import { Handbag, Heart, Search } from 'lucide-react';
import { motion } from 'motion/react';

import { useNavigate } from 'react-router';

import logo from '@/assets/logo/loose..svg';

import { useGlobalContext } from '@/context/GlobalContext';

import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../Button';

import styles from './Header.module.scss';

const Header = () => {
   const navigate = useNavigate();
   const { state } = useGlobalContext();

   const cartQuantity = state.miniCart.reduce((total, item) => total + item.quantity, 0);

   return (
      <nav className={styles.container}>
         <div className={styles.containerHeader}>
            <span>| ajuda</span>
            <span>| Junte-se a nós</span>
            <span>| entrar</span>
         </div>

         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperLogo}>
               <img
                  src={logo}
                  alt="Logo loose"
                  onClick={() => {
                     navigate('/');
                  }}
               />
            </div>

            <div className={styles.containerWrapperChips}>
               <Button label="novidades." />
               <Button label="homem." />
               <Button label="mulher." />
               <Button label="tênis." />
               <Button label="acessórios." />
            </div>

            <div className={styles.containerWrapperSearch}>
               <span>
                  <Search size={16} />
               </span>

               <input
                  type="text"
                  placeholder="Buscar"
               />
            </div>

            <div className={styles.containerWrapperActions}>
               <div className={styles.containerWrapperActionsIcons}>
                  <Heart size={20} />

                  <div className={styles.cartIcon}>
                     <Handbag
                        size={20}
                        onClick={() => {
                           navigate('/cart');

                           window.scrollTo({
                              top: 0,
                              behavior: 'instant',
                           });
                        }}
                     />

                     {cartQuantity > 0 && (
                        <motion.span
                           key={cartQuantity}
                           className={styles.cartQuantity}
                           initial={{ opacity: 0, y: 6, scale: 0.7 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           transition={{
                              duration: 0.25,
                              ease: 'easeOut',
                           }}
                        >
                           {cartQuantity}
                        </motion.span>
                     )}
                  </div>
               </div>

               <MobileMenu />
            </div>
         </div>
      </nav>
   );
};

export default Header;
