
import './App.css';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar"
function App() {
  return (
  <>
  <Navbar/>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/product/:slug" element={<ProductDetail/>}/>


   </Routes>
  
   
   </>
   
  );
}

export default App;
