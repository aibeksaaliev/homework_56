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
          meat.push(<BurgerMeat key={i + 2 * 3}/>);
        }
      } else if (ing.name === "Cheese") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerCheese key={i + 5 * 57}/>);
        }
      } else if (ing.name === "Salad") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerSalad key={i + 14 * 102}/>);
        }
      } else if (ing.name === "Bacon") {
        for (let i = 0; i < ing.amount; i++) {
          meat.push(<BurgerBacon key={i + 164 * 3}/>);
        }
      }
      return props.ingredients;
    });
    return meat;
  }

  return (
    <div className="Burger">

      <div className="sesame">
        <div className="sesame-seed sesame-seed1 bounceInDown"></div>
        <div className="sesame-seed sesame-seed2 bounceInDown"></div>
        <div className="sesame-seed sesame-seed3 bounceInDown"></div>
        <div className="sesame-seed sesame-seed4 bounceInDown"></div>
        <div className="sesame-seed sesame-seed5 bounceInDown"></div>
        <div className="sesame-seed sesame-seed6 bounceInDown"></div>
      </div>
      <div className="bun top bounceInDown">
        <div className="shadow shadow1"></div>
        <div className="shadow shadow2"></div>
      </div>



      {/*<div className="BreadTop">*/}
      {/*  <div className="Seeds1"></div>*/}
      {/*  <div className="Seeds2"></div>*/}
      {/*</div>*/}
      {getMeat()}
      {/*<div className="BreadBottom"></div>*/}
      <div className="bun bottom"></div>
    </div>
  );
};

export default BurgerBread;