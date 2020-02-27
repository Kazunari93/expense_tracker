import React from "react";

export const Transaction = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          現金 <span>-40000円</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
