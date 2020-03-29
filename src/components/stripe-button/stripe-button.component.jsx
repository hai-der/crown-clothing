import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_f7guhbLXxDOhDEQRdm3sbWD2009YqbDYOs';

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is $${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
