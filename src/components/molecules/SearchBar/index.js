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
  return (
    <SearchBarWrap>
      <input placeholder={'음악 검색'}></input>
      <img src={SearchIcon} alt="" />
    </SearchBarWrap>
  );
}

export default SearchBar;
