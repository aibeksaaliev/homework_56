import React from 'react';
import './IngredientButton.css';
import {Ingredient} from "../../types";

interface IngredientButtonProps extends React.PropsWithChildren {
  ingredient: Ingredient;
  onClick: React.MouseEventHandler;
  onClick2: React.MouseEventHandler;
  amount: number;
}

const IngredientButton: React.FC<IngredientButtonProps> = (props) => {
  return (
    <div className="ingredient">
      <div className="ingredient_img" onClick={props.onClick}>
        <img src={props.ingredient.image} alt="ingredient"/>
      </div>
      <span className="ingredient_name">{props.ingredient.name}</span>
      <span className="ingredient_counter">{props.amount}</span>
      <div className="buttons">
        <button className="add_ingredient_btn btn" onClick={props.onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ecad2f"
               className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg></button>
        <button className="delete_ingredient_btn btn" onClick={props.onClick2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ecad2f"
               className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg></button>
      </div>
    </div>
  );
};

export default IngredientButton;