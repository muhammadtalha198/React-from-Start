import "./Expense.css";
import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
	const [selectYear, setSelectYear] = useState("2019");

	const filterChangeHandler = (selectedValue) => {
		setSelectYear(selectedValue);
		console.log(selectedValue);
	};

	const showSelectedItems = props.expense.filter((expense) => {
		return expense.date.getFullYear().toString() === selectYear;
	});

	

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					defaultYear={selectYear}
					onFilterChange={filterChangeHandler}
				/>

				<ExpensesList items={ showSelectedItems} />

			</Card>
		</div>
	);
}

export default Expense;
