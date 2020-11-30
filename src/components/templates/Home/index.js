import Header from '@components/molecules/Header/index';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const HomeTemplate = ({ children }) => {
  return (
    <div className={styles.home__wrapper}>
      <Header />
      <div className={styles.home__container}>{children}</div>
    </div>
  );
};

HomeTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HomeTemplate;
