import propTypes from 'prop-types';
import Styled from 'styled-components';

import { Mobile, PC } from '../../components/common/MediaQuery';
import IconButton from '../../components/list/IconButton';
import ListElement from '../../components/list/ListElement';
import MobilePlayer from '../../components/list/MobilePlayer';
import MusicHeader from '../../components/list/MusicHeader';
import PCPlayer from '../../components/list/PCPlayer';
import PCAllPlayIC from '../../images/pc_allplay_ic.svg';

const MusicListWrap = Styled.div`

  background: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1460px;

`;

function MusicList({ list }) {
  return (
    <MusicListWrap>
      <Mobile>
        <MusicHeader list={list} />
        <ListElement />
        <MobilePlayer />
      </Mobile>
      <PC>
        <IconButton imgSrc={PCAllPlayIC} width={'127px'} height={'60px'} />
        <PCPlayer />
      </PC>
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
