import LogoIcon from '@images/logo_dark.svg';
import propTypes from 'prop-types';
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
  transition: transform 0.3s ease-in-out;

`;

const ImageIcon = Styled.img`
  width: 99px;
  height: 28px;
`;

function Hamburger({ open, setOpen }) {
  return (
    <HamburgerWrap onClick={() => setOpen(!open)} open={open}>
      <ImageIcon src={LogoIcon} />
      <div setOpen={setOpen}></div>
    </HamburgerWrap>
  );
}

Hamburger.propTypes = {
  open: propTypes.bool,
  setOpen: propTypes.object,
};

export default Hamburger;
