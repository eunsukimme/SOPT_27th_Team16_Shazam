import PropTypes from 'prop-types';

import styles from './index.module.css';

const Button = ({ children, className, style }) => {
  return (
    <button className={`${styles.button} ${className}`} style={style}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
