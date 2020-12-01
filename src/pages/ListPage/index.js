import ListNav from '@components/molecules/ListNav/index';
import MusicList from '@components/molecules/MusicList';

function ListPage() {
  const list = ['지금 가장 많이 검색한', '20대 인기 순위', '해외 인기 순위', '지금 가장 많이 듣는'];
  return (
    <>
      <ListNav list={list} />
      <MusicList list={list} />
    </>
  );
}

export default ListPage;
