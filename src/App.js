
import './App.css';
import Home from './views/Home'
import Shop from './views/Shop'
import Header from './components/global-component/Header'
import Footer from './components/global-component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
