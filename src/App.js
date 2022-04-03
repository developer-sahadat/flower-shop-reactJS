import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';
import NoteFound from './Components/NotFound/NoteFound';
import OrderPage from './Components/orderPage/OrderPage';
import Cart from './Components/Cart/Cart';


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
          <Route path='/order/:id' element={<OrderPage/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NoteFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
