import { useState } from 'react';

import background from '@/assets/images/background_products.png';
import image from '@/assets/mockups/background_products.png';
import bgNewsletter from '@/assets/mockups/bgNewsletter.png';

import { data } from '@/data/data';

import Button from '@/components/Button';

import { useGlobalContext } from '@/context/GlobalContext';

import styles from './Products.module.scss';

const Products = () => {
   const { showSucessMessage, addMinicart } = useGlobalContext();

   const [input, setInput] = useState<string>('');

   const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value;

      setInput(input);
   };

   const handleSubmit = () => {
      setInput('');

      showSucessMessage('Tá dentro. 👊');
   };

   return (
      <div className={styles.container}>
         <img
            src={background}
            alt="background"
         />
         <div className={styles.containerWrapper}>
            {data.map((item) => (
               <div
                  key={item.id}
                  className={styles.containerWrapperProducts}
               >
                  <img
                     src={item.img}
                     alt={item.productName}
                  />

                  <div className={styles.containerWrapperProductsInfos}>
                     <h5>{item.justIn}</h5>
                     <h4>{item.productName}</h4>
                     <p>{item.labelDescription}</p>
                     <p>{item.info}</p>

                     <div className={styles.containerWrapperProductsInfosFooter}>
                        <p>
                           {item.price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                           })}
                        </p>
                        <Button
                           label={item.labelButton}
                           customStyle={styles.containerWrapperProductsInfosFooterButton}
                           onClick={() => {
                              addMinicart(item.id);
                              showSucessMessage('Boa escolha!');
                           }}
                        />
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className={styles.containerFooter}>
            <img
               src={image}
               alt="duas pessoas tirando fotos"
            />
         </div>

         <div className={styles.containerNewsletter}>
            <img
               src={bgNewsletter}
               alt="cadastre-se para ficar por dentro das novidades do mundo streetwear"
            />

            <input
               type="email"
               placeholder="SEU EMAIL"
               value={input}
               onChange={handleChangeInput}
            />
            <Button
               label="enviar."
               customStyle={styles.containerNewsletterButton}
               onClick={handleSubmit}
            />
         </div>
      </div>
   );
};

export default Products;
