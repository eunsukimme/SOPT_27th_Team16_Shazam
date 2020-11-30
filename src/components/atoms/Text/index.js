import PropTypes from 'prop-types';

const Text = ({ children, style, className }) => {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Text;
