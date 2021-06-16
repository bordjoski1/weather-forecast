import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import ReactRoutes from './config/ReactRoutes'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ReactRoutes.HOME}>
          <Home/>
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
