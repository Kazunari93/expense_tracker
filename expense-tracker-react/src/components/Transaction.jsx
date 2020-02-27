import React from "react";

export const Transaction = () => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          現金 <span>-40000円</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
