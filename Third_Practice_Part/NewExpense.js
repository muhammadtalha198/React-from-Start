import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (enterExpenseData) => {
		const expenseData = {
			...enterExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setShowForm(false);
	};

	const showFormHandler = () => {
		setShowForm(true);
	};

	const stopShowFormHandler = () => {
		setShowForm(false);
	};

	return (
		<div className='new-expense'>
			{!showForm && (
				<button onClick={showFormHandler}> Add New Expense </button>
			)}
			{showForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopShowFormHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;
