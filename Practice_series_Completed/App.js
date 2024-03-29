import Expense from "./components/Expense";
import NewExpense from "./components/AddNewExpense/NewExpense";
import { useState } from "react";

const expenses = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expensesArray, setExpensesArray] = useState(expenses);

	const addExpenseHandler = (expense) => {
		console.log(expensesArray);

		setExpensesArray((prevExpensesArray) => {
			return [expense, ...prevExpensesArray];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expense expense={expensesArray} />
		</div>
	);
}

export default App;
