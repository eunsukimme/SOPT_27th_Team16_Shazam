import propTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

function Mobile({ children }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)',
  });
  return <>{isMobile && children}</>;
}

function PC({ children }) {
  const isPC = useMediaQuery({
    query: '(min-width: 1200px) and (max-width: 1920px)',
  });
  return <>{isPC && children}</>;
}

Mobile.propTypes = {
  children: propTypes.object,
};
PC.propTypes = {
  children: propTypes.object,
};

const mode = {
  Mobile,
  PC,
};

export default mode;
export { Mobile, PC };
