import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/home/:id'>
        <Detail />
      </Route>
      <Route path='/home' >
        <Home />
      </Route>
    </div>
  );
}

export default App;
