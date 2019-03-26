import PropTypes from 'prop-types';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const CONTROLS = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  const { price, purchaseable, onIngredientAdded, onIngredientRemoved, disabledInfo } = props;

  const priceSection = (
    <p>
      {'Current Price: '}
      <strong>{price.toFixed(2)}</strong>
    </p>
  );

  const controlsSection = CONTROLS.map(ctrl => (
    <BuildControl
      key={ctrl.label}
      label={ctrl.label}
      onAdd={() => onIngredientAdded(ctrl.type)}
      onRemove={() => onIngredientRemoved(ctrl.type)}
      disabled={disabledInfo[ctrl.type]}
    />
  ));

  const orderButtonSection = (
    <button
      className={classes.OrderButton}
      type="button"
      disabled={!purchaseable}
    >
      ORDER NOW
    </button>
  );

  return (
    <div className={classes.BuildControls}>
      {priceSection}
      {controlsSection}
      {orderButtonSection}
    </div>
  );
};

BuildControls.propTypes = {
  price: PropTypes.number.isRequired,
  purchaseable: PropTypes.bool.isRequired,
  onIngredientAdded: PropTypes.func,
  onIngredientRemoved: PropTypes.func,
  disabledInfo: PropTypes.objectOf(PropTypes.bool),
};

BuildControls.defaultProps = {
  onIngredientAdded: () => null,
  onIngredientRemoved: () => null,
  disabledInfo: {},
};

export default BuildControls;
