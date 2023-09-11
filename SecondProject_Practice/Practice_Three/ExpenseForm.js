import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const inputChangeHandler = (identifier, value) => {
		if (identifier === "title") {
			setEnteredTitle(value);
		} else if (identifier === "amount") {
			setEnteredAmount(value);
		} else if (identifier === "date") {
			setEnteredDate(value);
		} else {
			console.log("Invalid identifier: " + identifier);
		}
	};

	return (
		<div>
			<form>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>TiTle</label>
						{/* <input type='text' onChange={titleChangehaldler} /> */}
						<input
							type='text'
							onChange={(event) => {
								inputChangeHandler("title", event.target.value);
							}}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
					
						<input
							type='number'
							min='0.01'
							step='0.01'
							onChange={(event) => {
								inputChangeHandler(
									"amount",
									event.target.value
								);
							}}
						/>
					</div>
					<div className='new-expense__control'>
						<label>date</label>
						

						<input
							type='date'
							min='22-10-1'
							max='24-12-31'
							onChange={(event) => {
								inputChangeHandler("date", event.target.value);
							}}
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
