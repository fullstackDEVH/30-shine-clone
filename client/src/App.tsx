import React , {useState}from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import OtherServices from './pages/OtherServices/OtherServices';

function App() {
  const [overlay, setOverlay] = useState<boolean>(false);
  
  const doShowLogin = () => {
    setOverlay(pre => !pre);
  };

  return (
    <div className="app">
      <Header doShowLogin={doShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other-services' element={<OtherServices />} />
      </Routes>
      <Footer />
      <Login doShowLogin={doShowLogin} overlay={overlay} />
    </div>
  );
}

export default App;
