import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import { Mobile, PC } from '../../components/common/MediaQuery';
import NavButton from '../../components/list/NavButton';

const ListNavWrap = Styled.div`
  margin: 0;
  padding: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .mobile {
    display: flex;
    flex-direction: row;
    height: 40px;
  }
  .pc {
    display: flex;
    flex-direction: row;
    height: 90px;
  }
`;

function ListNav({ list, history }) {
  return (
    <ListNavWrap>
      <Mobile>
        <div className="mobile">
          {list.map((text, i) => {
            return (
              <NavButton
                text={text}
                width={'160px'}
                height={'40px'}
                key={i}
                onClickFunc={() => history.push(`/list/${i}`)}
              />
            );
          })}
        </div>
      </Mobile>
      <PC>
        <div className="pc">
          {list.map((text, i) => {
            return (
              <NavButton
                text={text}
                width={'160px'}
                height={'40px'}
                key={i}
                fontSize={'20px'}
                onClickFunc={() => history.push(`/list/${i}`)}
              />
            );
          })}
        </div>
      </PC>
    </ListNavWrap>
  );
}

ListNav.propTypes = {
  list: propTypes.list,
  history: propTypes.object,
};

export default withRouter(ListNav);
