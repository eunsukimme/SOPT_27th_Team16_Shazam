import propTypes from 'prop-types';
import Styled from 'styled-components';

const NavButtonWrap = Styled.div`
  button {
    margin: 0;
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

function NavButton({ onClickFunc, text, width, height, fontSize }) {
  return (
    <NavButtonWrap>
      <button onClick={onClickFunc} style={{ width: width, height: height, fontSize: fontSize }}>
        {text}
      </button>
    </NavButtonWrap>
  );
}

NavButton.propTypes = {
  onClickFunc: propTypes.function,
  text: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  fontSize: propTypes.string,
};

NavButton.defaultProps = {
  fontSize: '14px',
};

export default NavButton;
