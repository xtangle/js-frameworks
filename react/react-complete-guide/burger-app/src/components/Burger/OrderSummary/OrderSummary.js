import PropTypes from 'prop-types';
import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const { ingredients, onPurchaseCancel, onPurchaseContinue } = props;

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
      <p>Continue to Checkout?</p>
      <Button
        type="Success"
        onClick={onPurchaseContinue}
      >
        CONTINUE
      </Button>
      <Button
        type="Danger"
        onClick={onPurchaseCancel}
      >
        CANCEL
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  onPurchaseCancel: PropTypes.func,
  onPurchaseContinue: PropTypes.func,
};

OrderSummary.defaultProps = {
  onPurchaseCancel: () => null,
  onPurchaseContinue: () => null,
};

export default OrderSummary;
