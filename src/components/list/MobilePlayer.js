//import propTypes from 'prop-types';
import Styled from 'styled-components';

import MobilePlayIC from '../../images/mobile_play_icon.svg';
import MobileSkipIC from '../../images/mobile_skip_next_icon.svg';
import IconButton from './IconButton';

const MobilePlayerWarp = Styled.div`
position: absolute;
  min-height: calc(100% - 120px);
  display: flex;
  flex-direction: column-reverse;
  
  

  
  .mobile-player {
    margin-top: auto;
    border-top: 1px #e5e5e5 solid;
    height: 48px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    width: 375px;
    
  }

  .mobile-player__title-box {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .mobile-player__title {
  font-size: 14px;
  font-weight: 700;
  margin: 0px;
  }
  .mobile-player__suptitle {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
    margin: 0px;
    }
`;

function MobilePlayer() {
  return (
    <MobilePlayerWarp>
      <div className="mobile-player">
        <IconButton imgSrc={MobilePlayIC} width={'24px'} height={'24px'} />
        <IconButton imgSrc={MobileSkipIC} width={'24px'} height={'24px'} />
        <div className="mobile-player__title-box">
          <span className="mobile-player__title">title</span>
          <span className="mobile-player__subtitle">suptitle</span>
        </div>
      </div>
    </MobilePlayerWarp>
  );
}

//MobilePlayer.propTypes = {};

export default MobilePlayer;
