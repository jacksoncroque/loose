import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

import logo from '../../../assets/logo/loose..svg';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão continua dentro do Header */}
      <button
        onClick={() => setIsOpen(true)}
        className={styles.menuButton}
      >
        <Menu size={20} />
      </button>

      {/* Drawer sai da árvore do Header */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />

                <motion.div
                  className={styles.menu}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  <div className={styles.menuHeader}>
                    <img src={logo} alt="loose" />

                    <button onClick={() => setIsOpen(false)}>
                      <X />
                    </button>
                  </div>

                  <nav>
                    <ul>
                      {[
                        'novidades.',
                        'homem.',
                        'mulher.',
                        'tênis.',
                        'acessórios.',
                      ].map((link, index) => (
                        <motion.li
                          key={link}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.08,
                          }}
                        >
                          {link}
                          <ArrowRight />
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default MobileMenu;