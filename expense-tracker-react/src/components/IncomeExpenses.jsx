import React from "react";

export const IncomeExpenses = () => {
  return (
    <div class="inc-exp-container">
      <div>
        <h4>収入</h4>
        <p id="money-plus" class="money plus">
          0.00円
        </p>
      </div>
      <div>
        <h4>支出</h4>
        <p id="money-minus" class="money minus">
          -0.00円
        </p>
      </div>
    </div>
  );
};
