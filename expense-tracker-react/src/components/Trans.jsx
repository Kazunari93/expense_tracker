import React from "react";

export const Trans = ({ transaction }) => {
  return (
    <div>
      <li className="minus">
        {transaction.text} <span>-40000円</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};
