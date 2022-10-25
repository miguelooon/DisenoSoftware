import React from 'react'
import './cabece.css'
import {Link} from "react-router-dom"

const Cabece = () => {
  return (

    <div class="cabecera">
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