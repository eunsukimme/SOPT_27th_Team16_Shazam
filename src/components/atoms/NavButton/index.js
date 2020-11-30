import PropTypes from 'prop-types';

import styles from './index.module.css';

const NavButton = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

NavButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element]),
};

export default NavButton;
