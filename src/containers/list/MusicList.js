import propTypes from 'prop-types';
import Styled from 'styled-components';

import IconButton from '../../components/list/IconButton';
import ListElement from '../../components/list/ListElement';
import MobilePlayer from '../../components/list/MobilePlayer';
import MusicHeader from '../../components/list/MusicHeader';
import PCAllPlayIC from '../../images/pc_allplay_ic.svg';

const MusicListWrap = Styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
`;

function MusicList({ list }) {
  return (
    <MusicListWrap>
      <MusicHeader list={list} />
      <IconButton imgSrc={PCAllPlayIC} width={'127px'} height={'60px'} />
      <ListElement />
      <MobilePlayer />
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
