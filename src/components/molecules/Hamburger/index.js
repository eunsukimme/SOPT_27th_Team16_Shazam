import LogoIcon from '@images/logo_dark.svg';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const HamburgerWrap = Styled.div`
  flex-flow: column nowrap;
  background-color: #000000;
  position: fixed;
  position: fixed;
  top:0px;
  z-index:1231321; 
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease-in-out;

`;

const ImageIcon = Styled.img`
  width: 99px;
  height: 28px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const CancelIcon = Styled.div`
  width: 20px;
  height: 20px;
  color: white;
  position: absolute;
  top: 20px; 
  right: 20px;
  cursor:pointer;
`;

const ListWrap = Styled.div`
  margin-top: 100px;
  padding: 40px;
`;

const ListTitle = Styled.div`
  color:white;
  font-weight: bolder;
  font-size: 20px;
  &+& {
    margin-top: 53px;
  }
  cursor:pointer;
`;

function Hamburger({ open, setOpen, history }) {
  return (
    <HamburgerWrap open={open}>
      <ImageIcon src={LogoIcon} />
      <CancelIcon onClick={() => setOpen(!open)} open={open}>
        x
      </CancelIcon>
      <ListWrap>
        <ListTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          Download Shazam
        </ListTitle>
        <ListTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          app
        </ListTitle>
        <ListTitle
          onClick={() => {
            history.push('/list/0');
            setOpen(!open);
          }}
        >
          차트
        </ListTitle>
        <ListTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          내 라이브러리
        </ListTitle>
        <ListTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          도움말
        </ListTitle>
      </ListWrap>
    </HamburgerWrap>
  );
}

Hamburger.propTypes = {
  open: propTypes.bool,
  setOpen: propTypes.object,
  history: propTypes.object,
};

export default withRouter(Hamburger);
