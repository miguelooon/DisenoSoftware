import React from 'react'
import {Link} from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: 'whitesmoke' }} className='text-center text-lg-start text-muted' color= "dark">
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Visitanos en nuestras redes sociales!</span>
        </div>

        <div>
          <a href='https://web.facebook.com/Barbara.Vergara.Arce' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/barbynails____/?igshid=YmMyMTA2M2Y%3D' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>

          <a href='https://github.com/miguelooon/DisenoSoftware' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                BarbyNails
              </h6>
              <p>
                Este emprendimiento esta certificado, protegido y reservado. Cualquier cosa puedes contactarme.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='/catalogo' className='text-reset'>
                  Catalogo
                </a>
              </p>
            </MDBCol>

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                San Antonio, Chile
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                barbaranails@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 56 9 6712 3834
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a href=""className='text-reset fw-bold' >
         BarbyNails
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer