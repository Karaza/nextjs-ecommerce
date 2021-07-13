import { useState, useEffect } from 'react';

const useCart = () => {
  const getInitialCart = () => JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState();

  useEffect(() => {
    // local storage not set yet so we can use useEffect for the first call of it
    const initialCart = getInitialCart();
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  useEffect(() => {
    // write to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (id, qty = 1) => {
    const itemAlreadyInCart = cart.find((item) => item.id === id);

    if (itemAlreadyInCart) {
      // increase qty
      itemAlreadyInCart.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, qty }]);
    }
  };

  const removeItemFromCart = (id, qty) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
  };
};

export default useCart;
