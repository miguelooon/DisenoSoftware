import React from 'react'
import {Link} from "react-router-dom"
import Cart from '../Cart'


const Navbar = () => {
  return (
    <div>
                <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">


                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >

                    <ul className="navbar-nav col" >

                        <li className="nav-item ">
                        <Link className="nav-link" to ='/'>Inicio</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to='/catalogo'>Catalogo</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to='/catalogo'>Servicios</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to='/catalogo'>Contacto</Link>
                        </li>

                        

                    </ul>
                    
                    
                    


                </div>
                
                <Cart/>
                
                
            </div>
            
        </nav>
        

    </div>
    
  )
}

export default Navbar