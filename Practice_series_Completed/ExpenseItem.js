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
	const [title, setTitle] = useState("");

	/**
	 *
	 * => Event
	 *    - const clickHandler = () => {}
	 * => Event Handler
	 * 	  - onClick={clickHandler}
	 */

	const clickHandler = (value) => {
		setTitle(value.target.value);
		console.log(title);
	};

	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />

				<div className='expense-item__description'>
					<h2 className='expense-item h2'>{props.title}</h2>
					<div className='expense-item__price'>{props.amount}</div>
				</div>

				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	);
}

export default ExpenseItem;
