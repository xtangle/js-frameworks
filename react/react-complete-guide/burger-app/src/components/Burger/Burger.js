import PropTypes from 'prop-types';
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const { ingredients } = props;

  const transformedIngredients = Object.keys(ingredients)
    .flatMap((key) => [...Array(ingredients[key])].map(
      (_, i) => <BurgerIngredient key={`${key}_${i}`} type={key} />,
    ));

  const innerIngredientsSection = (transformedIngredients.length === 0)
    ? <p>Please start adding ingredients!</p>
    : transformedIngredients;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {innerIngredientsSection}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
};

Burger.defaultProps = {
  ingredients: [],
};


export default Burger;
