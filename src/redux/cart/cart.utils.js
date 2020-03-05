export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  // if item exists, increment quantity
  if (existingItem) {
    // NOTE: must always return NEW array with updated properties to ensure change detection
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
