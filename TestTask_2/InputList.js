import React from "react";
import "./InputList.css";
import { useState } from "react";

const InputList = (props) => {
	const [enteredValued, setEnteredValued] = useState("");

	const enteredValuedChangehaldler = (event) => {
		setEnteredValued(event.target.value);
	};

	const setInputArray = () => {
		let inputArray = props.inputArray;
		props.setInputArray([...inputArray, enteredValued]);
		setEnteredValued("");
		console.log(props.inputArray);
	};

	return (
		<div className='input-list'>
			<h1>Course Goal</h1>
			<input
				type='text'
				placeholder='Enter Your Goal'
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
