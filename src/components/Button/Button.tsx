import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({ customStyle = '', label = '', onClick = () => {} }) => {
   return (
      <button
         className={cn(styles.container, customStyle)}
         onClick={onClick}
      >
         {label}
      </button>
   );
};

export default Button;
