import IconButton from '@components/atoms/IconButton/index.js';
import { Mobile, PC } from '@components/atoms/MediaQuery/';
import ListElement from '@components/list/ListElement';
import MobilePlayer from '@components/list/MobilePlayer';
import PCPlayer from '@components/list/PCPlayer';
import MusicHeader from '@components/molecules/MusicHeader';
import PCAllPlayIC from '@images/pc_allplay_ic.svg';
import propTypes from 'prop-types';
import Styled from 'styled-components';

const MusicListWrap = Styled.div`

  background: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;

`;

function MusicList({ list }) {
  return (
    <MusicListWrap>
      <Mobile>
        <MusicHeader list={list} />
        <ListElement height={'80px'} fontSize={'20px'} subfontSize={'16px'} rankfontSize={'20px'} />
        <MobilePlayer />
      </Mobile>
      <PC>
        <MusicHeader list={list} />
        <IconButton imgSrc={PCAllPlayIC} width={'127px'} height={'60px'} />
        <ListElement
          height={'140px'}
          fontSize={'24px'}
          subfontSize={'20px'}
          rankfontSize={'30px'}
        />
        <PCPlayer />
      </PC>
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
