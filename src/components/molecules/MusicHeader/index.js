import IconButton from '@components/atoms/IconButton';
import { Mobile, PC } from '@components/atoms/MediaQuery';
import DownButton from '@images/downButton.svg';
import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import { rankData } from '../../../modules/rank';

const MusicHeaderWrap = Styled.div`
  max-width: 1440px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 20px;

  .mobile {
    height: 122px;
  }

  .pc {
    height: 183px;
  }

  .title {
    color: #0993FF;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .subtitle {
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

  const rank = ['most', 'twentys', 'foreign', 'now'];
  const id = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rankData(rank[match.params.id]));
  }, [match]);

  return (
    <MusicHeaderWrap>
      <Mobile className="mobile">
        <div className="title" style={{ fontSize: '24px', marginTop: '20px' }}>
          {title[id]}
          <IconButton imgSrc={DownButton} width={'48px'} height={'48px'} />
        </div>
        <div className="subtitle" style={{ fontSize: '16px', marginBottom: '16px' }}>
          {subtitle[id]}
        </div>
      </Mobile>
      <PC className="pc">
        <div className="title" style={{ fontSize: '40px', marginTop: '40px' }}>
          {title[id]}
        </div>
        <div className="subtitle" style={{ fontSize: '24px', marginBottom: '40px' }}>
          {subtitle[id]}
        </div>
      </PC>
    </MusicHeaderWrap>
  );
}

MusicHeader.propTypes = {
  list: propTypes.list,
  match: propTypes.object,
};

export default withRouter(MusicHeader);
