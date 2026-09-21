import { Handbag, Heart, Search } from 'lucide-react';

import { useNavigate } from 'react-router';

import logo from '@/assets/logo/loose..svg';

import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../Button';

import styles from './Header.module.scss';

const Header = () => {
   const navigate = useNavigate();

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
                  <Handbag
                     size={20}
                     onClick={() => {
                        navigate('/cart');
                     }}
                  />
               </div>

               <MobileMenu />
            </div>
         </div>
      </nav>
   );
};

export default Header;
