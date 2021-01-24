import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from './components/Layout';

import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import NotFound from './pages/NotFound'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/search/:name' component={SearchPage} />
          <Route exact path='/cardDetail/:cardId' component={DetailPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
