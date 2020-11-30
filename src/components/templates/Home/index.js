import Header from '@components/molecules/Header/index';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const HomeTemplate = ({ children }) => {
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__container}>
        <Header />
        {children}
      </div>
    </div>
  );
};

HomeTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HomeTemplate;
