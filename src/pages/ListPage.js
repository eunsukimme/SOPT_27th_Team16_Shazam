import Styled from 'styled-components';

import Header from '../containers/Header';
import ListNav from '../containers/ListNav';
import MusicList from '../containers/MusicList';

const ListPageWrap = Styled.div`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  * { 
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; 
    font-style: normal;
    font-weight: bold;
  }
`;

function ListPage() {
  const list = ['지금 가장 많이 검색한', '20대 인기 순위', '해외 인기 순위', '지금 가장 많이 듣는'];
  return (
    <ListPageWrap>
      <Header />
      <ListNav list={list} />
      <MusicList list={list} />
    </ListPageWrap>
  );
}

export default ListPage;
