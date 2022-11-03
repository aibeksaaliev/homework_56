import React from 'react';

interface CostCounterProps {
  cost: number;
}

const CostCounter: React.FC<CostCounterProps> = (props) => {
  return (
    <div>
      <span>{props.cost}</span>
    </div>
  );
};

export default CostCounter;