import HeaderButton from '@components/atoms/HeaderButton';
import IconButton from '@components/atoms/IconButton';
import { Mobile, PC } from '@components/atoms/MediaQuery';
import SearchBar from '@components/molecules/SearchBar';
import BarIcon from '@images/bar.svg';
import LogoIcon from '@images/logo.svg';
import SearchIcon from '@images/search.svg';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const HeaderWrap = Styled.div`
  background: white;

  .header--mobile {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__logo {
      margin-left: 20px;
    }
    &__nav {
      display: flex;
      margin-right: 16px;
    }
  }

  .header--PC {
    max-width: 1440px;
    height: 120px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function Header({ history }) {
  return (
    <HeaderWrap>
      <Mobile>
        <div className="header--mobile">
          <div className="header--mobile__logo">
            <IconButton
              imgSrc={LogoIcon}
              width={'99px'}
              height={'28px'}
              onClickFunc={() => history.push('/')}
            />
          </div>
          <div className="header--mobile__nav">
            <IconButton imgSrc={SearchIcon} width={'48px'} height={'48px'} />
            <IconButton imgSrc={BarIcon} width={'48px'} height={'48px'} />
          </div>
        </div>
      </Mobile>
      <PC>
        <div className="header--PC">
          <IconButton
            imgSrc={LogoIcon}
            width={'180px'}
            height={'50px'}
            onClickFunc={() => history.push('/')}
          />
          <HeaderButton text={'내 라이브러리'} />
          <HeaderButton text={'APP'} />
          <HeaderButton text={'차트'} onClickFunc={() => history.push('/list/0')} />
          <SearchBar />
        </div>
      </PC>
    </HeaderWrap>
  );
}

Header.propTypes = {
  history: propTypes.object,
};

export default withRouter(Header);
