import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height, style }) => {
  return <img src={src} alt={alt} width={width} height={height} style={style} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
