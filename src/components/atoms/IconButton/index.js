import propTypes from 'prop-types';
import Styled from 'styled-components';

const IconButtonWrap = Styled.div`
  margin: 0;
  padding: 0;
  
  button {
    border-style: none;
    background: white;
    outline: none;
    cursor: pointer;
  }
`;

function IconButton({ imgSrc, width, height, onClickFunc }) {
  return (
    <IconButtonWrap>
      <button onClick={onClickFunc}>
        <img src={imgSrc} width={width} height={height} alt="" />
      </button>
    </IconButtonWrap>
  );
}

IconButton.propTypes = {
  imgSrc: propTypes.object,
  width: propTypes.number,
  height: propTypes.number,
  onClickFunc: propTypes.function,
};

export default IconButton;
