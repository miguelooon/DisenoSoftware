import React from 'react'
import { Link } from 'react-router-dom'
import Sli from '../Swipe/Sli'

const Perfil = () => {
  return (
    <div>      
        <div className="container marketing">

  
            <div className="row justify-content-center">



            


                <div className="col-lg-4">
                    <h2 className="fw-normal">Hola!</h2>
                    <svg className="bd-placeholder-img rounded-circle" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                     <image href= "./images/barbara.png" height="100%"/>
                    </svg>
                    

                    
                    <h4>Mi nombre es <br></br>
                    Barbara Vergara Arce</h4>
                    <p> Pongo toda mi dedicacion en lo que hago,<br></br> Espero que te guste! </p>

                    <p><Link to="/contacto" className="btn btn-secondary" >Conoceme mas &raquo;</Link></p>
                </div>

            
            
            <Sli/>
            <hr/>

            </div>
            



            

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">Mis propios diseños, <span className="text-muted">Elegancia y creatividad</span></h2>
                            <p className="lead">Puedes ver todo los diseños que tengo para ofrecer, de seguro te va a encantar!</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/>
                            <image href= "./images/portada1.png" height="100%"/></svg>

                        </div>
                    </div>

            <hr className="featurette-divider"/>


                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">Llevo 7 años dedicandome a las uñas, <span className="text-muted">ven a ver mi trabajo</span></h2>
                            <p className="lead">He tomado distintos cursos para poder mejorar en lo que hago, y la practica  </p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/>
                             <image href= "./images/portada2.png" height="100%"/>
                            </svg>

                        </div>
                    </div>



            <hr className="featurette-divider"/>


        </div>
        
    </div>
    
    
  )
}

export default Perfil