import React from "react";

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>収入</h4>
        <p className="money plus">0.00円</p>
      </div>
      <div>
        <h4>支出</h4>
        <p className="money minus">-0.00円</p>
      </div>
    </div>
  );
};
