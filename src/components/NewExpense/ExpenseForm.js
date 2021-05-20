import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // // best way
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // every input value always give string 
    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value);        
        // if you this approach is bad
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        
        // // best way to get previous state, this approach is better
        // setUserInput((prevState) => {
        //     // return new state snapshot
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     // return new state snapshot
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     // return new state snapshot
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    const submitHandler = (event) => {
        // prevent browser refresh the page
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // + will enforce string to number
            date: new Date(enteredDate), // convert to the date object

        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>

                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;