import Styled from 'styled-components';

import IconButton from '../components/IconButton';
import Bar from '../images/bar.svg';
import Logo from '../images/logo.svg';
import Search from '../images/search.svg';

const HeaderWrap = Styled.div`
  max-width: 375px;
  height: 80px;
  padding: auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: white;

  .empty {
    width: 137px;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <IconButton imgSrc={Logo} width={'99px'} height={'28px'} />
      <div className="empty"></div>
      <IconButton imgSrc={Search} width={'48px'} height={'48px'} />
      <IconButton imgSrc={Bar} width={'48px'} height={'48px'} />
    </HeaderWrap>
  );
}

export default Header;
