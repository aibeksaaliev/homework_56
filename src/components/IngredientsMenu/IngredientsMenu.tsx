import React from 'react';
import './IngredientsMenu.css';
import IngredientButton from "../IngredientButton/IngredientButton";
import {Ingredient} from "../../types";

interface IngredientsMenuProps {
  ingredients: Ingredient[];
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
}

const IngredientsMenu: React.FC<IngredientsMenuProps> = (props) => {
  const getIngredients = props.ingredients.map(ingredient => <IngredientButton onClick={() => {props.addIngredient(ingredient.name)}} onClick2={() => {props.deleteIngredient(ingredient.name)}} key={ingredient.id} ingredient={ingredient}/>);

  return (
    <div className="ingredients_menu">
      {getIngredients}
    </div>
  );
};

export default IngredientsMenu;