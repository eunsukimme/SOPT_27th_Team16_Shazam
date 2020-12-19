import IconButton from '@components/atoms/IconButton';
import Range from '@components/atoms/Range/index.js';
import propTypes from 'prop-types';
import Styled from 'styled-components';

import PCPlayIC from '../../images/pc_playing_ic.svg';
import PCSkipIC from '../../images/pc_skip_next_ic.svg';
import PCPrevIC from '../../images/pc_skip_previous_ic.svg';

const PCPlayerWarp = Styled.div`
  position: fixed; 
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  /* transform: translateX(0%); */
  /* transition: transform 1000ms ease-in-out; */
  transform: ${({ open }) => (!open ? 'translateY(100%)' : 'translateY(0)')}; 
  transition: transform 0.3s ease-in-out;

  .PC-Player {
    margin-top: auto;
    border-top: 1px #e5e5e5 solid;
    height: 100px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }

  .PC-Player__img-box {
      height: 50px;
      width: 50px;
      background: #C4C4C4;
      margin-left: 20px;
  }

  .PC-Player__title-box {
    margin-left: 20px;
    margin-right: 155px;
    display: flex;
    flex-direction: column;
    
  }
  
  .PC-Player__title {
  font-size: 16px;
  font-weight: 700;
  margin: 0px;
  }
  .PC-Player__suptitle {
    color: #636363;
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
    
    }
`;

function PCPlayer({ title, subTitle, open, songimageUri }) {
  return (
    <PCPlayerWarp open={open}>
      <div className="PC-Player">
        <div
          className="PC-Player__img-box"
          style={{
            background: `url(${songimageUri})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '50px',
            width: '50px',
          }}
        ></div>
        <div className="PC-Player__title-box">
          <span className="PC-Player__title">{title}</span>
          <span className="PC-Player__subtitle">{subTitle}</span>
        </div>
        <IconButton imgSrc={PCPrevIC} width={'51px'} height={'48px'} />
        <IconButton imgSrc={PCPlayIC} width={'51px'} height={'48px'} />
        <IconButton imgSrc={PCSkipIC} width={'57px'} height={'48px'} />
        <Range />
      </div>
    </PCPlayerWarp>
  );
}

PCPlayer.propTypes = {
  title: propTypes.string,
  open: propTypes.bool,
  subTitle: propTypes.string,
  songimageUri: propTypes.string,
};

export default PCPlayer;
