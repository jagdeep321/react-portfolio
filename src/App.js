import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import "./style/Home.css";

function App() {
  return (
   <BrowserRouter>

   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='#home' element={<Hero/>}/>
     <Route path='#about' element={<About/>}/>
     <Route path='#skills' element={<Skills/>}/>
     <Route path='#experience' element={<Skills/>}/>
     <Route path='#contact' element={<Contacts/>}/>
      <Route path='#fotter' element={<Footer/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
