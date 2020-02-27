import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Transaction } from "./components/Transaction";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
