import conceptArt from '@/assets/mockups/concept_1.png';
import mascot from '@/assets/mockups/mascot.png';
import skater from '@/assets/mockups/skater.png';
import star from '@/assets/mockups/star.png';

import Button from '@/components/Button';

import styles from './BrandStatment.module.scss';

const BrandStatment = () => {
   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperBrand}>
               <div className={styles.containerWrapperBrandImage}>
                  <img
                     src={conceptArt}
                     alt="Concept art"
                  />
               </div>

               <div className={styles.containerWrapperBrandDescription}>
                  <h2>a gente não é roupa.</h2>

                  <p>
                     a gente é a desculpa <br></br>
                     que você precisa pra sair de casa.
                  </p>

                  <span></span>

                  <p>
                     porque rua não é cenário, é território.<br></br>
                     porque domingo de manhã também é hora de ser visto <br></br>
                     porque ninguém precisa pedir licença pra ocupar espaço.
                  </p>

                  <h2>a Loose não veste quem quer passar despercebido</h2>

                  <span></span>

                  <img
                     src={star}
                     alt="estrela"
                  />
                  <img
                     src={star}
                     alt="estrela"
                  />
                  <img
                     src={mascot}
                     alt="mascote"
                  />
                  <img
                     src={skater}
                     alt="mascote"
                  />

                  <h2>a Loose veste quem chegou</h2>
               </div>
               <div className={styles.containerWrapperBrandImage}>
                  <img
                     src={conceptArt}
                     alt="Concept art"
                  />
               </div>
            </div>

            <Button
               label="wear it loose. live it loud."
               customStyle={styles.containerButton}
            />
         </div>
      </div>
   );
};

export default BrandStatment;
