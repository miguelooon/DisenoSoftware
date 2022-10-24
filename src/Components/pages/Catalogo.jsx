import React from 'react'
import Products from '../Products'

import styles from './styles.module.scss'



const Catalogo = () => {
  return (
    <div className={styles.cata}>
      <div>
       <Products/>
      </div>
    </div>
  )
}

export default Catalogo