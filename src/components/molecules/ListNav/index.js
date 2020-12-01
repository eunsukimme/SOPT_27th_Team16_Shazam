import { Mobile, PC } from '@components/atoms/MediaQuery';
import NavButton from '@components/atoms/NavButton';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const ListNavWrap = Styled.div`
  margin: 0;
  padding: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  background: white;
  box-shadow: 
      inset 0px 10px 10px -10px rgba(0, 0, 0, 0.3),
      inset 0px -2px 2px -2px rgba(0, 0, 0, 0.3);

  .mobile {
    display: flex;
    flex-direction: row;
    height: 40px;
  }
  .pc {
    display: flex;
    flex-direction: row;
    height: 90px;
    max-width: 1440px;
    margin: auto;
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
                width={'240px'}
                height={'90px'}
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
