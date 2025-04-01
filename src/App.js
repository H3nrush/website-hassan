
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Contact from './contact/contact';
import About from './about/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
