import PropTypes from 'prop-types';
import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const { ingredients, price, onPurchaseCancel, onPurchaseContinue } = props;

  const ingredientSummary = Object.entries(ingredients)
    .map(([ingredient, num]) => (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>
        {`: ${num}`}
      </li>
    ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>{`Total Price: ${price.toFixed(2)}`}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        type="Danger"
        onClick={onPurchaseCancel}
      >
        CANCEL
      </Button>
      <Button
        type="Success"
        onClick={onPurchaseContinue}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
  onPurchaseCancel: PropTypes.func,
  onPurchaseContinue: PropTypes.func,
};

OrderSummary.defaultProps = {
  onPurchaseCancel: () => null,
  onPurchaseContinue: () => null,
};

export default OrderSummary;
