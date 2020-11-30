import Image from '@components/atoms/Image/index';
import NavButton from '@components/atoms/NavButton/index';

import styles from './index.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles['header__container--left']}>
        <Image src={`${process.env.PUBLIC_URL}/images/logo.svg`} width="180px" height="50px" />
        <NavButton>내 라이브러리</NavButton>
        <NavButton>APP</NavButton>
        <NavButton>차트</NavButton>
      </div>
      <div className={styles['header__container--right']}></div>
    </nav>
  );
};

export default Header;
