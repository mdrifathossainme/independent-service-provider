import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Checkout from "./Pages/CheckOut/CheckOut"
import Blog from "./Pages/Blog/Blog"
import NotFound from "./Pages/NotFound/NotFound"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"

function App() {
  return (
   <>
   <Header/>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/home" element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/blog' element={<Blog/>} />
     <Route path='/checkout' element={<Checkout/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<SignUp/>} />
     <Route path='/checkout' element={<Checkout/>} />
     <Route path='*' element={<NotFound/>} />
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
