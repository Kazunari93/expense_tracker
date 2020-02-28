import React from "react";

export const Trans = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}
          {Math.abs(transaction.amount)}円
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};
