import React,{useContext} from 'react'
import styles from './styles.module.scss'
import {ProductsData} from '../../Data/ProductsData'
import './probando.css'
import { CartContext } from '../../Context/CartContext'


const Products = () => {

  const {addItemToCart} = useContext(CartContext)







  return (
    <div>
      <div className={styles.productos_contenedor}>


        {ProductsData.map((product,i)=> (


          <div key={i} className={styles.product}>

            <img src= {product.img} alt={product.name}/>

            <div>
              <p>
              <center>{product.name}</center>
                
              </p>

              <div>
                <p>
                  <center>Precio: ${product.price}</center>
                </p>
              
              </div>
            </div>





            <button type="button" class="btn bd-primary"  onClick={()=>addItemToCart(product)}>Agregar al Carrito</button>


          </div>
        
        
        
        ))}
      </div>
    </div>
  )
}

export default Products