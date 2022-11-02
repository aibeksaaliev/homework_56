import React from 'react';
import './BurgerBread.css';
import BurgerBacon from "../BurgerBacon/BurgerBacon";
import BurgerMeat from "../BurgerMeat/BurgerMeat";
import BurgerCheese from "../BurgerCheese/BurgerCheese";
import BurgerSalad from "../BurgerSalad/BurgerSalad";
import {CurrentBurger} from "../../types";

interface BurgerBreadProps {
  ingredients: CurrentBurger[];
}

const BurgerBread: React.FC<BurgerBreadProps> = (props) => {
  const getMeat = () => {
    const meat: JSX.Element[] = [];
    props.ingredients.map(ing => {
      if (ing.name === "Meat") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerMeat key={i}/>);
        }
      } else if (ing.name === "Cheese") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerCheese key={i}/>);
        }
      } else if (ing.name === "Salad") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerSalad key={i}/>);
        }
      } else if (ing.name === "Bacon") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerBacon key={i}/>);
        }
      }
    })
    return meat;
  }

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {getMeat()}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default BurgerBread;