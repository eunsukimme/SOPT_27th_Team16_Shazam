import IconButton from '@components/atoms/IconButton';
import DownButton from '@images/downButton.svg';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const MusicHeaderWrap = Styled.div`
  height: 122px;
  max-width: 1440px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 20px;

  .title {
    font-size: 24px;
    line-height: 36px;
    color: #0993FF;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .subtitle {
    font-size: 16px;
    line-height: 24px;
    color: #636363;
    opacity: 0.4;
  }
`;

function MusicHeader({ list, match }) {
  const title = list;
  const subtitle = [
    '지금 가장 많이 Shazam된 트랙',
    '20대에게 가장 인기 있는 트랙',
    '해외에서 가장 인기 있는 트랙',
    '지금 사람들이 가장 많이 듣는 트랙',
  ];
  const id = match.params.id;

  return (
    <MusicHeaderWrap>
      <div className="title">
        {title[id]}
        <IconButton imgSrc={DownButton} width={'48px'} height={'48px'} />
      </div>
      <div className="subtitle">{subtitle[id]}</div>
    </MusicHeaderWrap>
  );
}

MusicHeader.propTypes = {
  list: propTypes.list,
  match: propTypes.object,
};

export default withRouter(MusicHeader);
