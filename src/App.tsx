import React, {useState} from 'react';
import './App.css';
import IngredientsMenu from "./components/IngredientsMenu/IngredientsMenu";
import OrderWindow from "./components/OrderWindow/OrderWindow";
import {Ingredient} from "./types";
import meatImg from './assets/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png';
import cheeseImg from './assets/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png';
import saladImg from './assets/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png';
import baconImg from './assets/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png';

const INGREDIENTS: Ingredient[] = [
  {name: "Meat", cost: 80, image: meatImg, id: 156},
  {name: "Cheese", cost: 50, image: cheeseImg, id: 651},
  {name: "Salad", cost: 10, image: saladImg, id: 321},
  {name: "Bacon", cost: 60, image: baconImg, id: 532}
];

function App() {
  const [burgerIngredients, setBurgerIngredients] = useState([
    {name: "Meat", amount: 0},
    {name: "Cheese", amount: 0},
    {name: "Salad", amount: 0},
    {name: "Bacon", amount: 0}
  ]);

  const addIngredient = (name: string) => {
    setBurgerIngredients(prevState => prevState.map(ingredient => {
      return ingredient.name === name ? {
        ...ingredient,
        amount: ingredient.amount + 1,
      } : ingredient;
    }));
  };

  const removeIngredient = (name: string) => {
    setBurgerIngredients(prevState => prevState.map(ingredient => {
      return ingredient.name === name ? {
        ...ingredient,
        amount: ingredient.amount === 0 ? ingredient.amount = 0 : ingredient.amount - 1,
      } : ingredient;
    }));
  };

  const getAmount = (name: string) => {
    let amount: number = 0;
    burgerIngredients.map(ingredient => {
      if (name === ingredient.name) {
        return amount = ingredient.amount;
      }
      return burgerIngredients;
    });
    return amount;
  }

  const getCost = INGREDIENTS.reduce((acc, ingredient) => {
    burgerIngredients.map(currentIngredient => {
      if (ingredient.name === currentIngredient.name) {
        return acc += (ingredient.cost * currentIngredient.amount);
      }
      return burgerIngredients;
    });
    return acc;
  },30);


  return (
    <div className="App">
      <IngredientsMenu ingredients={INGREDIENTS} addIngredient={addIngredient} deleteIngredient={removeIngredient} getAmount={getAmount}/>
      <OrderWindow current={burgerIngredients} getCost={getCost}/>
    </div>
  );
}

export default App;
