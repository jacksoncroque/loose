import background from '@/assets/images/background_products.png';
import image from '@/assets/mockups/background_products.png';
import bgNewsletter from '@/assets/mockups/bgNewsletter.png';

import { data } from './data/data';

import styles from './Products.module.scss';
import Button from '@/components/Button';

const Products = () => {
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
                        <p>{item.price}</p>
                        <Button
                           label={item.labelButton}
                           customStyle={styles.containerWrapperProductsInfosFooterButton}
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
            />
            <Button
               label="enviar."
               customStyle={styles.containerNewsletterButton}
            />
         </div>
      </div>
   );
};

export default Products;
