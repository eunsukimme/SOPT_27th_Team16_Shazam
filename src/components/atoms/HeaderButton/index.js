import propTypes from 'prop-types';
import Styled from 'styled-components';

const HeaderButtonWrap = Styled.div`
  button {
    margin: 0;
    text-align: center;
    border-style: none;
    background: white;
    outline: none;

    :focus {
      text-decoration: underline;
    }
  }
`;

function HeaderButton({ onClickFunc, text, width, height, fontSize }) {
  return (
    <HeaderButtonWrap>
      <button onClick={onClickFunc} style={{ width: width, height: height, fontSize: fontSize }}>
        {text}
      </button>
    </HeaderButtonWrap>
  );
}

HeaderButton.propTypes = {
  onClickFunc: propTypes.function,
  text: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  fontSize: propTypes.string,
};

HeaderButton.defaultProps = {
  fontSize: '20px',
  width: '200px',
  height: '120px',
};

export default HeaderButton;
