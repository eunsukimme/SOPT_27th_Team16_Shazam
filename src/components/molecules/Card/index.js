import Image from '@components/atoms/Image/index';
import Text from '@components/atoms/Text/index';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = ({ src, text, wrapperStyle, imageStyle, textStyle }) => {
  return (
    <Wrapper style={wrapperStyle}>
      <Image src={src} style={imageStyle}></Image>
      <Text style={textStyle}>{text}</Text>
    </Wrapper>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  wrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default Card;
