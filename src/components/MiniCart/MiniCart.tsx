import { BsCart4 } from 'react-icons/bs';

import { data } from './data/data';

import styles from './MiniCart.module.scss';
import Button from '../Button';

const MiniCart = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            {/* <div className={styles.containerWrapperEmpty}>
               <BsCart4 size={50} />
               <h1>Seu carrinho está vazio.</h1>
            </div> */}
            {/* <div className={styles.containerWrapperResume}>
               <div className={styles.containerWrapperResumeOrder}>Resumo da compra</div>
               <p>Produto</p>
               <p>Total</p>
            </div> */}

            <div className={styles.containerWrapperFilled}>
               <div className={styles.containerWrapperResumeOrder}>
                  <strong>Produtos</strong>
               </div>

               <div className={styles.containerWrapperFilledProd}>
                  {data.map((item) => (
                     <div
                        key={item.id}
                        className={styles.containerWrapperFilledProduct}
                     >
                        <img
                           src={item.img}
                           alt={item.productName}
                        />

                        <div className={styles.containerWrapperFilledProductInfo}>
                           <p>{item.productName}</p>

                           <div className={styles.containerWrapperFilledProductInfoPrice}>
                              <p>{item.price}</p>
                           </div>

                           <div className={styles.containerWrapperFilledProductInfoQuantity}>
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className={styles.containerWrapperResume}>
               <div className={styles.containerWrapperResumeOrder}>
                  <strong>Resumo da compra</strong>
               </div>

               <p>Total</p>
               <strong>R$ 300,00</strong>

               <Button label="Continuar" />
            </div>
         </div>
      </div>
   );
};

export default MiniCart;
