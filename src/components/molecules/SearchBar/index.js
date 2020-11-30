import Image from '@components/atoms/Image/index';

import styles from './index.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchbar__wrapper}>
      <div className={styles.searchbar__input}>음악 검색</div>
      <Image src={`${process.env.PUBLIC_URL}/images/magnifier.svg`} width="48px" height="48px" />
    </div>
  );
};

export default SearchBar;
