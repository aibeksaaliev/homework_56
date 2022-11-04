import React, {useState} from 'react';
import './App.css';
import {Ingredient} from "./types";
import IngredientsMenu from "./components/IngredientsMenu/IngredientsMenu";
import OrderWindow from "./components/OrderWindow/OrderWindow";
import meatImg from './assets/image_2022-11-03_15-23-34.png';
import cheeseImg from './assets/image_2022-11-03_15-24-14.png';
import saladImg from './assets/image_2022-11-03_15-24-50.png';
import baconImg from './assets/image_2022-11-03_15-24-34.png';

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

  const getAmount = (name: string) => burgerIngredients.reduce((acc, ingredient) => {
    if (name === ingredient.name) {
      acc += ingredient.amount;
    }
    return acc;
  }, 0);


  const getCost = INGREDIENTS.reduce((acc, ingredient) => {
    burgerIngredients.forEach(currentIngredient => {
      if (ingredient.name === currentIngredient.name) {
        return acc += (ingredient.cost * currentIngredient.amount);
      }
    });
    return acc;
  },30);


  return (
    <div className="App">
      <IngredientsMenu
        ingredients={INGREDIENTS}
        addIngredient={addIngredient}
        deleteIngredient={removeIngredient}
        getAmount={getAmount}
      />
      <OrderWindow
        current={burgerIngredients}
        getCost={getCost}
      />
    </div>
  );
}

export default App;
