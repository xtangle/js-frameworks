import PropTypes from 'prop-types';
import React from 'react';
import classes from './BurgerIngredient.css';

function getIngredient(type) {
  let ingredient = null;
  switch (type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className={classes.Meat} />;
      break;
    case ('cheese'):
      ingredient = <div className={classes.Cheese} />;
      break;
    case ('bacon'):
      ingredient = <div className={classes.Bacon} />;
      break;
    case ('salad'):
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

const BurgerIngredient = (props) => {
  const { type } = props;
  return getIngredient(type);
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
