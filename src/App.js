import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Navbar from './Components/navegacion/Navbar';
import Inicio from './Components/pages/Inicio';
import Catalogo from './Components/pages/Catalogo';
import Footer from './Components/navegacion/Footer';
import Cabece from './Components/Cabecera/Cabece';
import { CartProvider } from './Context/CartContext';




function App() {
  return (
    <div className='App'>

      <CartProvider>
      <Router>

       

        <Cabece/>
        
        
        <Navbar/>
        
        <Routes>
          
          

          <Route path= '/catalogo' element= {<Catalogo/>}/>
          
          <Route path= '/' exact element= {<Inicio/>}/>

        </Routes>

       <Footer /> 

        
      </Router>
      </CartProvider>

      
    
    </div>

  );
}

export default App;
