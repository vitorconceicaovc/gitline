import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Nav } from './components/Nav/Nav';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
        
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='demo' element={<Demo/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
