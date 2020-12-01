//import propTypes from 'prop-types';
import Styled from 'styled-components';

import PCPlayIC from '../../images/pc_playing_ic.svg';
import PCSkipIC from '../../images/pc_skip_next_ic.svg';
import IconButton from './IconButton';

const PCPlayerWarp = Styled.div`
position: absolute;
  min-height: calc(100% - 160px);
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  
  

  
  .PC-Player {
    margin-top: auto;
    border-top: 1px #e5e5e5 solid;
    height: 100px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    width: 375px;
    
  }

  .PC-Player__title-box {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .PC-Player__title {
  font-size: 14px;
  font-weight: 700;
  margin: 0px;
  }
  .PC-Player__suptitle {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
    margin: 0px;
    }
`;

function PCPlayer() {
  return (
    <PCPlayerWarp>
      <div className="PC-Player">
        <IconButton imgSrc={PCPlayIC} width={'51px'} height={'48px'} />
        <IconButton imgSrc={PCSkipIC} width={'57px'} height={'48px'} />
        <div className="PC-Player__title-box">
          <span className="PC-Player__title">title</span>
          <span className="PC-Player__subtitle">suptitle</span>
        </div>
      </div>
    </PCPlayerWarp>
  );
}

//PCPlayer.propTypes = {};

export default PCPlayer;
