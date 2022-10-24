import React from 'react'
import './cabece.css'
import {Link} from "react-router-dom"

const Cabece = () => {
  return (

    <div class="cabecera">

            <div class="wrap">

                <div class="descuento">

                    <p> Obten un cupon de descuento solo por hoy!</p>

                </div>

            </div>



            <div class="caja-logo">

                <div class="logo">

                    <Link to="./">

                     <img src="../images/logo.jpeg" height="100%" width="100%"/>

                     </Link>
                
                </div>
                
            </div>
            

            

    </div>
  )
}

export default Cabece