import { BrowserRouter, Route } from 'react-router-dom';

import ListPage from './pages/ListPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={MainPage} />
      <Route path={'/list/:id'} component={ListPage} />
    </BrowserRouter>
  );
}

export default App;
