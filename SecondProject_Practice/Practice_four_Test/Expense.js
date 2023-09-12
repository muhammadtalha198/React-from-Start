import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";

import { useState } from "react";

function Expense(props) {
	const [selectYear, setSelectYear] = useState("2019");

	const filterChangeHandler = (selectedValue) => {
		setSelectYear(selectedValue);
		console.log(selectedValue);
	};

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter defaultYear={selectYear } onFilterChange={filterChangeHandler} />
				<ExpenseItem
					title={props.expense[0].title}
					amount={props.expense[0].amount}
					date={props.expense[0].date}
				/>
				<ExpenseItem
					title={props.expense[1].title}
					amount={props.expense[1].amount}
					date={props.expense[1].date}
				/>
				<ExpenseItem
					title={props.expense[2].title}
					amount={props.expense[2].amount}
					date={props.expense[2].date}
				/>
			</Card>
		</div>
	);
}

export default Expense;
