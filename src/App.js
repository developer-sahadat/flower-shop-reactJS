import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
