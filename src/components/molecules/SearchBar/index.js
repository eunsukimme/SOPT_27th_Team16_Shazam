import SearchIcon from '@images/search.svg';
import Styled from 'styled-components';

const SearchBarWrap = Styled.div`
  box-sizing: border-box;
  width: 420px;
  height: 90px;
  border-radius: 100px;
  background-color: #EEEEEE;

  input {
    border: none;
    background: none;
    font-size: 20px;
    font-weight: normal;
    position: relative;
    width: 250px;
    left: 30px;
    bottom: 15px;
    caret-color: #0993FF;

    ::placeholder {
      color: #7A7A7A;
    }
    :focus {
      outline: none;
    }
  }


  img {
    width: 70px;
    height: 70px;
    position: relative;
    left: 70px;
    top: 10px;
  }
`;

function SearchBar() {
  const focused = (event) => {
    const wrap = event.currentTarget.parentElement;
    wrap.style.cssText = 'box-shadow: 0px 2px 10px 0px #0993FF';
  };
  const nonFocused = (event) => {
    const wrap = event.currentTarget.parentElement;
    wrap.style.cssText = 'box-shadow: none';
  };

  return (
    <SearchBarWrap>
      <input placeholder={'음악 검색'} onMouseEnter={focused} onMouseLeave={nonFocused}></input>
      <img src={SearchIcon} alt="" />
    </SearchBarWrap>
  );
}

export default SearchBar;
