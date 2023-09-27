import React from "react";
import "./InputList.css";
import { useState } from "react";

const InputList = (props) => {
	const [enteredValued, setEnteredValued] = useState("");
	const [valid, setValid] = useState(false);

	const enteredValuedChangehaldler = (event) => {
		if (event.target.value.length > 0) {
			setValid(false);
		}
		setEnteredValued(event.target.value);
	};

	const setInputArray = () => {
		let inputArray = props.inputArray;
		if (enteredValued.length === 0) {
			setValid(true);
			return;
		}
		props.setInputArray([...inputArray, enteredValued]);
		setEnteredValued("");
		console.log(props.inputArray);
	};

	return (
		<div className={`input-list ${valid ? "invalid" : ""}`}>
			<h1>Course Goal</h1>
			<input
				type='text'
				placeholder={
					valid ? "Please enter something" : "Enter your Goal"
				}
				value={enteredValued}
				onChange={enteredValuedChangehaldler}
			></input>
			<button
				type='submit'
				className='input-button'
				onClick={setInputArray}
			>
				Add Goal
			</button>
		</div>
	);
};

export default InputList;
