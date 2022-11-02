import React from 'react';
import './App.css';
import IngredientsMenu from "./components/IngredientsMenu/IngredientsMenu";
import {Ingredient} from "./types";
import meatImg from './assets/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png';
import cheeseImg from './assets/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png';
import saladImg from './assets/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png';
import baconImg from './assets/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png';

const INGREDIENTS: Ingredient[] = [
  {name: "Meat", cost: 80, image: meatImg},
  {name: "Cheese", cost: 50, image: cheeseImg},
  {name: "Salad", cost: 10, image: saladImg},
  {name: "Bacon", cost: 60, image: baconImg}
];

function App() {
  return (
    <div className="App">
      <IngredientsMenu ingredients={INGREDIENTS}/>
    </div>
  );
}

export default App;
