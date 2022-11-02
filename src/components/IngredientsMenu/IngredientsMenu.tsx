import React from 'react';
import './IngredientsMenu.css';
import IngredientButton from "../IngredientButton/IngredientButton";
import {Ingredient} from "../../types";

interface IngredientsMenuProps {
  ingredients: Ingredient[];
}

const IngredientsMenu: React.FC<IngredientsMenuProps> = (props) => {
  const getIngredients = props.ingredients.map(ingredient => <IngredientButton ingredient={ingredient}/>);

  return (
    <div className="ingredients_menu">
      {getIngredients}
    </div>
  );
};

export default IngredientsMenu;