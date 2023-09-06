import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
	/**
	 * => Define useState
	 * 	  - const[title,setTitle] = useState(props.title);
	 *
	 * => use
	 * 	  -setTitle("newTitle");
	 */
	const [title, setTitle] = useState(props.title);

	/**
	 *
	 * => Event
	 *    - const clickHandler = () => {}
	 * => Event Handler
	 * 	  - onClick={clickHandler}
	 */

	const clickHandler = () => {
		setTitle("New Title");
		console.log(title);
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
