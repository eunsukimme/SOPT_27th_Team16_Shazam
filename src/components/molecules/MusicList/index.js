import MusicHeader from '@components/molecules/MusicHeader';
import propTypes from 'prop-types';
import Styled from 'styled-components';

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
      <MusicHeader list={list} />
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
