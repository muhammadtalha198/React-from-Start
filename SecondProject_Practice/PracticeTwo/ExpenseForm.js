import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
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

	return (
		<div>
			<form>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>TiTle</label>
						<input type='text' onChange={titleChangehaldler} />
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							onChange={amountChangehaldler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>date</label>
						<input
							type='date'
							min='22-10-1'
							max='24-12-31'
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
