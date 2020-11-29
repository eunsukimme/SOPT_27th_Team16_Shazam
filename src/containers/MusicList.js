import propTypes from 'prop-types';
import Styled from 'styled-components';

import MusicHeader from '../components/MusicHeader';

const MusicListWrap = Styled.div`
  max-width: 375px;
`;

function MusicList({ list }) {
  return (
    <MusicListWrap>
      <MusicHeader list={list} />
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
