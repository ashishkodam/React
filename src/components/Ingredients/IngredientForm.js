import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo(({ addIngtrdientsProps }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
    addIngtrdientsProps({ title: title, amount: amount });
    setTitle("");
    setAmount("");
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
              id="amount"
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
