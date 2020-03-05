import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);

// NOTE: Selectors are composable. They can be used as input to other selectors.
export const selectCartItemsCount = createSelector(selectCartItems, cartItems =>
  cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  )
);