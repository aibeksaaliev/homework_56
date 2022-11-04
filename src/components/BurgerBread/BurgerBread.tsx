import React from 'react';
import './BurgerBread.css';
import {CurrentBurger} from "../../types";
import BurgerBacon from "../BurgerBacon/BurgerBacon";
import BurgerMeat from "../BurgerMeat/BurgerMeat";
import BurgerCheese from "../BurgerCheese/BurgerCheese";
import BurgerSalad from "../BurgerSalad/BurgerSalad";

interface BurgerBreadProps {
  ingredients: CurrentBurger[];
}

const BurgerBread: React.FC<BurgerBreadProps> = (props) => {

  const getIngredients = () => {
    const ingredients: JSX.Element[] = [];
    props.ingredients.forEach(ing => {
      switch (ing.name) {
        case "Meat":
          for (let i = 0; i < ing.amount; i++) {
            ingredients.push(<BurgerMeat key={i + 2 * 3}/>)
          }
          break;
        case "Cheese":
          for (let i = 0; i < ing.amount; i++) {
            ingredients.push(<BurgerCheese key={i + 5 * 57}/>);
          }
          break;
        case "Salad":
          for (let i = 0; i < ing.amount; i++) {
            ingredients.push(<BurgerSalad key={i + 14 * 102}/>);
          }
          break;
        case "Bacon":
          for (let i = 0; i < ing.amount; i++) {
            ingredients.push(<BurgerBacon key={i + 164 * 3}/>);
          }
          break;
        default:
      }
    });
    return ingredients;
  };

  return (
    <div className="Burger">
      <div className="sesame">
        <div className="sesame-seed sesame-seed1"></div>
        <div className="sesame-seed sesame-seed2"></div>
        <div className="sesame-seed sesame-seed3"></div>
        <div className="sesame-seed sesame-seed4"></div>
        <div className="sesame-seed sesame-seed5"></div>
        <div className="sesame-seed sesame-seed6"></div>
      </div>
      <div className="bun top">
        <div className="shadow shadow1"></div>
        <div className="shadow shadow2"></div>
      </div>
      {getIngredients()}
      <div className="bun bottom"></div>
    </div>
  );
};

export default BurgerBread;