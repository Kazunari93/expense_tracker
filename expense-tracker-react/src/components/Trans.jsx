import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Trans = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}
          {Math.abs(transaction.amount)}円
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
