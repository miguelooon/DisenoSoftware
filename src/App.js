import './App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Navbar from './Components/navegacion/Navbar';
import Inicio from './Components/pages/Inicio';
import Catalogo from './Components/pages/Catalogo';
import Footer from './Components/navegacion/Footer';
import { CartProvider } from './Context/CartContext';
import Contacto from './Components/pages/Contacto';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='App'>

      



      <CartProvider>
      
      <Router>

       <Navbar/>

       
        
       
        


       

        
        
      
        
        <Routes>
          
          
          <Route path= '/' exact element= {<Inicio/>}/>

          <Route path= '/catalogo' element= {<Catalogo/>}/>

          <Route path= '/contacto' element= {<Contacto/>}/>


        </Routes>

        <Footer /> 

        
      </Router>

      </CartProvider>
      

      
    
    </div>

  );
}

export default App;
