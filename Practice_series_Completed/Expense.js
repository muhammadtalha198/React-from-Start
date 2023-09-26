import "./Expense.css";
import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
	const [selectYear, setSelectYear] = useState("2019");

	const filterChangeHandler = (selectedValue) => {
		setSelectYear(selectedValue);
		console.log(selectedValue);
	};

	const showSelectedItems = props.expense.filter((expense) => {
		console.log(
			"showSelectedItems:",
			expense.date.getFullYear().toString() === selectYear
		);
		return expense.date.getFullYear().toString() === selectYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					defaultYear={selectYear}
					onFilterChange={filterChangeHandler}
				/>
				<ExpensesChart expenses={showSelectedItems} />

				<ExpensesList items={showSelectedItems} />
			</Card>
		</div>
	);
}

export default Expense;
