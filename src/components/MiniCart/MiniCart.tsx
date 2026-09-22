import { BsCart4 } from 'react-icons/bs';

import { data } from '@/data/data';

import styles from './MiniCart.module.scss';
import Button from '../Button';
import { useGlobalContext } from '@/context/GlobalContext';

const MiniCart = () => {
   const { state, addMinicart, removeMinicart, getCartTotal } = useGlobalContext();

   const productsIds = state.miniCart.map((item) => item.productId);

   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            {state.miniCart.length ? (
               <div className={styles.containerWrapperFilled}>
                  <div className={styles.containerWrapperResumeOrder}>
                     <strong>Produtos</strong>
                  </div>

                  <div className={styles.containerWrapperFilledProd}>
                     {data
                        .filter((item) => productsIds.includes(item.id))
                        .map((item) => {
                           const product = state.miniCart.find(
                              (cart) => cart.productId === item.id,
                           );

                           return (
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
                                       <p>
                                          {item.price.toLocaleString('pt-BR', {
                                             style: 'currency',
                                             currency: 'BRL',
                                          })}
                                       </p>
                                    </div>

                                    <div
                                       className={styles.containerWrapperFilledProductInfoQuantity}
                                    >
                                       <button onClick={() => removeMinicart(item.id)}>-</button>

                                       <span>{product?.quantity ?? 1}</span>

                                       <button onClick={() => addMinicart(item.id)}>+</button>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                  </div>
               </div>
            ) : (
               <div className={styles.containerWrapperEmpty}>
                  <BsCart4 size={50} />
                  <h1>Seu carrinho está vazio.</h1>
               </div>
            )}

            <div className={styles.containerWrapperResume}>
               <div className={styles.containerWrapperResumeOrder}>
                  <strong>Resumo da compra</strong>
               </div>

               <p>Total</p>

               <strong>
                  {getCartTotal().toLocaleString('pt-BR', {
                     style: 'currency',
                     currency: 'BRL',
                  })}
               </strong>

               <Button label="Continuar" />
            </div>
         </div>
      </div>
   );
};

export default MiniCart;
