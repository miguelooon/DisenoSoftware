import React from 'react'
import {Link} from "react-router-dom"
import Cart from '../Cart'


const Navbar = () => {
  return (

    
        
    <div className='probando'>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top ">
         

            
            <div class="container-fluid">
            <Cart/>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav col" >

                        <li className="nav-item ">
                        <Link className="nav-link" to ='/'>Inicio</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to='/catalogo'>Catalogo</Link>
                        </li>

                        <li className="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Servicios
                            </a>

                            <ul class="dropdown-menu">
                                <li><Link to="/Catalogo" class="dropdown-item" href="#">Limpieza Facial</Link></li>
                                <li><Link to="/Catalogo" class="dropdown-item" href="#">Perfilado Cejas</Link></li>
                                <li><Link to="/Catalogo" class="dropdown-item" href="#">Lifting</Link></li>
                            </ul>

                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to='/contacto'>Contacto</Link>
                        </li>

                        

                    </ul>

                </div>
                
            </div>
        </nav>
    </div>



    
    
  )
}

export default Navbar