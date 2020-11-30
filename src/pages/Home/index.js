import Button from '@components/atoms/Buttons/index';
import Image from '@components/atoms/Image/index';
import Text from '@components/atoms/Text/index';
import HomeTemplate from '@components/templates/Home';

import styles from './index.module.css';

const HomePage = () => {
  return (
    <HomeTemplate>
      <div className={styles.home__main__container}>
        <div className={styles['home__main__container--left']}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/main.svg`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
        <div className={styles['home__main__container--right']}>
          <Text className={styles.main__text}>어떤 곡이든 몇 초 이내에 찾아드립니다</Text>
          <Text className={styles.sub__text}>
            Shazam은 주변에서 들리는 음악을 인식하고 이름을 검색합니다.
          </Text>
          <Button>앱 다운로드</Button>
        </div>
      </div>
    </HomeTemplate>
  );
};

export default HomePage;
