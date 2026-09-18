import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({ customStyle = '', label = '', ...props }) => {
   return (
      <button
         className={cn(styles.container, customStyle)}
         {...props}
      >
         {label}
      </button>
   );
};

export default Button;
