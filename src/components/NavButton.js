import propTypes from 'prop-types';
import Styled from 'styled-components';

const NavButtonWrap = Styled.div`
  button {
    width: 160px;
    height: 40px;
    margin: 0;
    font-size: 14px;
    text-align: center;
    border-style: none;
    background: white;
    outline: none;
    box-shadow: 
      inset 0px 10px 10px -10px rgba(0, 0, 0, 0.3),
      inset 0px -2px 2px -2px rgba(0, 0, 0, 0.3);

    :focus {
      color: #0993FF;
    }
  }
`;

function NavButton({ onClickFunc, text }) {
  return (
    <NavButtonWrap>
      <button onClick={onClickFunc}>{text}</button>
    </NavButtonWrap>
  );
}

NavButton.propTypes = {
  onClickFunc: propTypes.function,
  text: propTypes.string,
};

export default NavButton;
