import IconButton from '@components/atoms/IconButton/index.js';
import { Mobile, PC } from '@components/atoms/MediaQuery/';
import ListElement from '@components/list/ListElement';
import MobilePlayer from '@components/list/MobilePlayer';
import PCPlayer from '@components/list/PCPlayer';
import MusicHeader from '@components/molecules/MusicHeader';
import PCAllPlayIC from '@images/pc_allplay_ic.svg';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';

const MusicListWrap = Styled.div`

  background: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;

`;

// const musics = [
//   {
//     title: 'title',
//     subTitle: 'subTitle',
//   },
//   {
//     title: 'title2',
//     subTitle: 'subTitle2',
//   },
//   {
//     title: 'title3',
//     subTitle: 'subTitle3',
//   },
// ];

function MusicList({ list }) {
  const [open, setOpen] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState({
    title: '',
    subTitle: '',
    songimageUri: '',
  });

  const { rankData } = useSelector(({ rank }) => ({
    rankData: rank.data,
  }));

  console.log(rankData);
  const handleClickMusic = ({ title, subTitle, songimageUri }) => {
    if (title === selectedMusic.title) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
    setSelectedMusic({ title, subTitle, songimageUri });
  };

  return (
    <MusicListWrap>
      <Mobile>
        <MusicHeader list={list} />
        <ListElement
          setOpen={setOpen}
          height={'80px'}
          fontSize={'20px'}
          subfontSize={'16px'}
          rankfontSize={'20px'}
        />
        <MobilePlayer open={open} />
      </Mobile>

      <PC>
        <MusicHeader list={list} />
        <IconButton imgSrc={PCAllPlayIC} width={'127px'} height={'60px'} />
        {rankData &&
          rankData.map((music, index) => (
            <ListElement
              onClickFunc={handleClickMusic}
              key={music.title}
              height={'140px'}
              fontSize={'24px'}
              subfontSize={'20px'}
              rankfontSize={'30px'}
              order={index}
              title={music.title}
              subTitle={music.subTitle}
              songimageUri={music.songimageUri}
            />
          ))}
        {selectedMusic.title && (
          <PCPlayer
            open={open}
            title={selectedMusic.title}
            subTitle={selectedMusic.subTitle}
            songimageUri={selectedMusic.songimageUri}
          />
        )}
      </PC>
    </MusicListWrap>
  );
}

MusicList.propTypes = {
  list: propTypes.list,
};

export default MusicList;
