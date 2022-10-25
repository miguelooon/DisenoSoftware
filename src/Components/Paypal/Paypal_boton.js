import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Paypal_boton = () => {
  return (
    <div>
        <PayPalScriptProvider>
            <PayPalButtons/>

        </PayPalScriptProvider>

    </div>
  )
}

export default Paypal_boton