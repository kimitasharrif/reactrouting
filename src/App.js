import Home from './components/Home';
import Beddings from './components/Beddings'
import About from './components/About'
import Players from './components/Players'
import Fruits from './components/Fruits'
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/beddings" element={<Beddings />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/players" element={<Players />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
