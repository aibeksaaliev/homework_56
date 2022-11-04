import React from 'react';
import './CostCounter.css';

interface CostCounterProps {
  cost: number;
}

const CostCounter: React.FC<CostCounterProps> = (props) => {
  return (
    <div className="cost_box">
      <span>Cost: {props.cost} сом</span>
    </div>
  );
};

export default CostCounter;