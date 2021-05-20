// import logo from './logo.svg';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DUMMY_EXPENSES = [
    { id: 123, title: "Toilet Paper", amount: 294.67, date: new Date(2021, 3, 28), },
    { id: 234, title: "New Tv", amount: 199.67, date: new Date(2021, 2, 28), },
    { id: 345, title: "Car Insurance", amount: 678.67, date: new Date(2019, 12, 28), },
    { id: 456, title: "New Desk(Wooden)", amount: 467.67, date: new Date(2018, 4, 28), },
  ];
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }


  // this is cubersome way, it auto tranform to this after compiliing
  // return React.createElement(
  //   "div", 
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, {item: expenses})
  // );

  return (
    <div className="App">
      <header className="App-header">
        {/* every new component here must create a new folder */}
        <NewExpense onAddExpense={addExpensesHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
