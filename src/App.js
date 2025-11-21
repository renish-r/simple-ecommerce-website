import './App.css';
import './wgrid';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Wgrid from './wgrid';
import Register from './Register';
import Login from './login';
import LandingPage from './LandingPage';
import Main from './Main';
import Nav from './Nav';
import Card from './Card';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='/productlist' element={<Card />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
