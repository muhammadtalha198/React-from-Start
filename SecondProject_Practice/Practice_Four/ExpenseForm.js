import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangehaldler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangehaldler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangehaldler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setEnteredAmount("");
		setEnteredDate("");
		setEnteredTitle("");
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>TiTle</label>
						<input
							type='text'
							value={enteredTitle}
							onChange={titleChangehaldler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							value={enteredAmount}
							onChange={amountChangehaldler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>date</label>
						<input
							type='date'
							min='22-10-1'
							max='24-12-31'
							value={enteredDate}
							onChange={dateChangehaldler}
						/>
					</div>
					<div className='new-expense__actions'>
						<button type='submit'>Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ExpenseForm;
