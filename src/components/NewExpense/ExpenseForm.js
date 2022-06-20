import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmout, setEnteredAmout] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmout: '',
  //   enteredDate: ''
  // });

  

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  };

  const amountChangeHandler = (e) => {
    setEnteredAmout(e.target.value)
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmout,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmout('');
    setEnteredDate('');
  };

  return(
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input 
              type="text" 
              value={enteredTitle} 
              onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input 
              type="number"
              min="0.01" 
              step="0.01" 
              value={enteredAmout}
              onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input 
              type="date"
              min="2021-01-01" 
              max="2022-12-31" 
              value={enteredDate}
              onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit" >Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;