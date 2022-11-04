import React from 'react';
import './IngredientsMenu.css';
import {Ingredient} from "../../types";
import IngredientButton from "../IngredientButton/IngredientButton";

interface IngredientsMenuProps {
  ingredients: Ingredient[];
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
  getAmount: (name: string) => number;
}

const IngredientsMenu: React.FC<IngredientsMenuProps> = (props) => {

  const getIngredients = props.ingredients.map(ingredient =>
    <IngredientButton
      onClick={() => {props.addIngredient(ingredient.name)}}
      onClick2={() => {props.deleteIngredient(ingredient.name)}}
      key={ingredient.id}
      ingredient={ingredient}
      amount={props.getAmount(ingredient.name)}
    />);

  return (
    <div className="ingredients_menu">
      {getIngredients}
    </div>
  );
};

export default IngredientsMenu;