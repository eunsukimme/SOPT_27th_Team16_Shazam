import Button from '@components/atoms/Button/index';
import Image from '@components/atoms/Image';
import { mediaQueries } from '@components/atoms/MediaQuery';
import Text from '@components/atoms/Text';
import Card from '@components/molecules/Card/index';
import Footer from '@components/molecules/Footer/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .home__main__container {
    padding: 110px 0 0 0;
    position: relative;
    display: flex;
    justify-content: center;

    ${mediaQueries('mobile')`
      padding: 20px 0 0 0;
      flex-direction: column-reverse;
      align-items: center;
    `}
  }

  .home__main__container--left {
    position: relative;
    width: 695px;
    padding-top: 56.25%;
  }

  .home__main__container--right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${mediaQueries('mobile')`
      align-items: center;
    `}
  }

  .home__main__container--right .main__text {
    margin: 60px 0 18px 0;
    width: 442px;

    font-weight: bold;
    font-size: 80px;
    /* or 96px */
    color: #0993ff;
    word-break: keep-all;

    ${mediaQueries('mobile')`
      width: 80%;
    `}
  }

  .home__main__container--right .sub__text {
    margin: 0 0 60px 0;
    max-width: 580px;
    font-weight: bold;
    font-size: 30px;
    /* or 45px */
    color: #484848;
    word-break: keep-all;

    ${mediaQueries('mobile')`
      width: 80%;
    `}
  }

  .home__chart__container {
    margin: 0 0 290px 0;
    display: flex;
    flex-direction: column;
  }

  .home__chart__container--title {
    font-weight: bold;
    font-size: 40px;
    line-height: 59px;
    color: #000000;
  }

  .home__chart__block {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    column-gap: 20%;
  }
`;

const StyledButton = styled(Button)`
  ${mediaQueries('mobile')`
    margin: 0 0 30px 0;
  `}
`;

const cards = [
  {
    src: `${process.env.PUBLIC_URL}/images/card-image-1.png`,
    text: '지금 가장 많이 검색한',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/card-image-2.png`,
    text: '20대 인기 순위',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/card-image-3.png`,
    text: '해외 인기순위',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/card-image-4.png`,
    text: '지금 가장 많이 듣는',
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <div className={'home__main__container'}>
        <div className={'home__main__container--left'}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/main.svg`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, maxHeight: '667px' }}
          />
        </div>
        <div className={'home__main__container--right'}>
          <Text className={'main__text'}>어떤 곡이든 몇 초 이내에 찾아드립니다</Text>
          <Text className={'sub__text'}>
            Shazam은 주변에서 들리는 음악을 인식하고 이름을 검색합니다.
          </Text>
          <StyledButton>앱 다운로드</StyledButton>
        </div>
      </div>
      <div className="home__chart__container">
        <Text className="home__chart__container--title">Shazam 차트 {'>'}</Text>
        <div className="home__chart__block">
          {cards.map((card) => (
            <Card
              key={card.src}
              imageStyle={{
                width: '100%',
              }}
              textStyle={{
                fontWeight: 'bold',
                fontSize: '45px',
                lineHeight: '67px',
                textAlign: 'center',
                color: '#3180F7',
              }}
              src={card.src}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
