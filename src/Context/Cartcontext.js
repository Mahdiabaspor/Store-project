import { createContext, useContext, useState } from "react";
import API from "../API/API";
import { Cookies } from "react-cookie";

// create cart context
const CartContext = createContext();

const defualtCart = {
  items:[],
  totalPrice:0
}

const CartProvider = ({ children }) => {

  // States
  const [Cart, setCart] = useState(null);
  const [pending, setpending] = useState(false);
  const [Err, setErr] = useState(null);

  // edit local storage cart
  const editLocalStorageCart = (product, quantity) => {

    // get cart from local storage or if not create new one base on defualt cart
    let cart = JSON.parse(localStorage.getItem("cart")) ?? defualtCart

    // get price from product price
    const price = product.price

    // get calculate single item totalPrice
    const totalPrice = price * quantity

    // find index of product in items list
    const itemIndex = cart.items.findIndex(item => item.product === product._id)

    // check if product exist in items
    if (itemIndex > -1) {
      // get item from items by index
      let cartItem = cart.items[itemIndex]
      
      // check if total quantity is bigger than 0
      if (cartItem.qty + quantity > 0) {
  
        // calculate new cart item based on inputs
        cartItem.qty += quantity
        cart.totalPrice += totalPrice

        // replace by old cart item
        cart.items[itemIndex] = cartItem
      }else {
        // if total quantity is not! bigger than 0
        // means remove item from cart

        // calculate cart total price
        cart.totalPrice -= price

        // remove item from items by index
        cart.items.splice(itemIndex, 1)
      }
    }else{
      // product did not exist in items

      // check if quantity is bigger than 0
      if (quantity > 0) {

        // push new item to items
        cart.items.push({
          product:product._id,
          qty: quantity
        })

        cart.totalPrice += totalPrice
      }
    }
  
    // save new cart in loacal storage
    localStorage.setItem("cart", JSON.stringify(cart))

    // return new cart
    return cart
  }

  // get cart
  const Getcard = async () => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  };

  // increaser item quantity by one
  const increaserCart = async (product) => {
    const cart = editLocalStorageCart(product,1)
    setCart(cart)
  };

  // decerese item quantity by one
  const decereseCart = async(product)=>{
    const cart = editLocalStorageCart(product, -1)
    setCart(cart)
  }

  // add to cart
  const postCart = async(product, quantity)=>{
    const cart = editLocalStorageCart(product, quantity)
    setCart(cart)
  }

  const value = {
    Cart,
    pending,
    Err,
    Getcard,
    increaserCart,
    decereseCart,
    postCart
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const Usecart = () => useContext(CartContext);
export { Usecart, CartProvider };