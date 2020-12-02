import Header from '@components/molecules/Header';
import ListPage from '@pages/ListPage/index';
import MainPage from '@pages/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';

const FontWrap = Styled.div`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  * { 
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; 
    font-style: normal;
    font-weight: bold;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <FontWrap>
        <Header />
        <Route exact path={'/'} component={MainPage} />
        <Route path={'/list/:id'} component={ListPage} />
      </FontWrap>
    </BrowserRouter>
  );
}

export default App;

// git test
