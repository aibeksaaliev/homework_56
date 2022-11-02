import React from 'react';
import './OrderWindow.css';
import BurgerBread from "../BurgerBread/BurgerBread";
import {CurrentBurger} from "../../types";

interface OrderWindowProps {
  current: CurrentBurger[];
}

const OrderWindow: React.FC<OrderWindowProps> = (props) => {
  return (
    <div className="order_window">
      <BurgerBread ingredients={props.current}/>
    </div>
  );
};

export default OrderWindow;