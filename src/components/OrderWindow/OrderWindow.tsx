import React from 'react';
import './OrderWindow.css';
import BurgerBread from "../BurgerBread/BurgerBread";
import {CurrentBurger} from "../../types";
import CostCounter from "../CostCounter/CostCounter";

interface OrderWindowProps {
  current: CurrentBurger[];
  getCost: number;
}

const OrderWindow: React.FC<OrderWindowProps> = (props) => {
  return (
    <div className="order_window">
      <BurgerBread ingredients={props.current}/>
      <CostCounter cost={props.getCost}/>
    </div>
  );
};

export default OrderWindow;