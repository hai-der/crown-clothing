import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon'>
    <ShoppingCart className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
