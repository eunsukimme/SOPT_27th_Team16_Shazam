import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import NavButton from '../components/NavButton';

const ListNavWrap = Styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 0;
  padding: 0;
  max-width: 375px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function ListNav({ list, history }) {
  return (
    <ListNavWrap>
      {list.map((text, i) => {
        return <NavButton text={text} key={i} onClickFunc={() => history.push(`/list/${i}`)} />;
      })}
    </ListNavWrap>
  );
}

ListNav.propTypes = {
  list: propTypes.list,
  history: propTypes.object,
};

export default withRouter(ListNav);
