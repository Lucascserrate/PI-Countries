import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
/* import Detail from './components/Detail/Detail'; */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/*  <Route path='/home/:id' element={<Detail />} /> */}
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
