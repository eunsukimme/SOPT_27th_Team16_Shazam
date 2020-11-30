import Image from '@components/atoms/Image/index';
import NavButton from '@components/atoms/NavButton/index';
import SearchBar from '@components/molecules/SearchBar/index';

import styles from './index.module.css';

const Header = () => {
  return (
    <nav className={styles.header__wrapper}>
      <div className={styles.header__container}>
        <div className={styles['header__container--left']}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            width="180px"
            height="50px"
            style={{
              margin: '0 60px 0 0',
            }}
          />
          <NavButton>내 라이브러리</NavButton>
          <NavButton>APP</NavButton>
          <NavButton>차트</NavButton>
        </div>
        <div className={styles['header__container--right']}>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
