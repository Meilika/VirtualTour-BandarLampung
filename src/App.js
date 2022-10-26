import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ListWisata from './pages/ListWisata';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wisata" element={<ListWisata />} />
      <Route path="/maps" element={<Location />} />
      <Route path="/:slug" element={<Detail />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;