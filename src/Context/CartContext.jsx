import { createContext,useEffect,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const [cartItems, setCartItems] = useState( () => {

        /* Para no perder el carrito cada vez que se actualize*/


        try{
            /* Guardamos en una constante lo almacenado en local*/
            const productosEnLocalStorage = localStorage.getItem('cartProducts');
            /* Devolvemos lo guardado en local starge, parse devuelve el string como objeto*/
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];

        }catch(error){
            return [];


        }


    });

    useEffect( () => {
        /* en local storage guardaremos el cart products, como strings.*/
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));

        console.log(cartItems)


    }, [cartItems]);



    const addItemToCart = (product) => {

        /*  Buscamos si esta en el carrito, */

        
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );


        if(inCart){
            setCartItems(
                cartItems.map((productInCart)=> {

                    /*  Si ya esta, le agregamos uno. */
                    if(productInCart.id === product.id){
                        return{...inCart, amount: inCart.amount + 1};
                    } else return productInCart;





                })
            );

           /*  Si no, lo establecemos en uno. */
        }else{
            setCartItems([...cartItems,{...product,amount:1}]);
        }


        



    };

    const deleteItemToCart =(product) =>{

        /*  Buscamos si esta en el carrito, */

        
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );


        
        /*  Si solo hay uno, lo sacamos del carrito*/

        if(inCart.amount === 1) { 
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            )
        } else{

            setCartItems( 

                cartItems.map((productInCart)=>{




                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount-1};
                    } else return productInCart; 
                }));
         }

     }


    



    

    return(
        <CartContext.Provider
        value = {{cartItems,addItemToCart,deleteItemToCart}}
        >
            {children}
        </CartContext.Provider>
    );






};