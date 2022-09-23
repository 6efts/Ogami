import './App.css';
import Home from './views/Home'
import Shop from './views/Shop'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
