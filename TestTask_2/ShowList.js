import React from "react";
import "./ShowList.css";

const ShowList = (props) => {
	const deleteHandler = (index) => {
		const updatedArray = [...props.inputArray];
		updatedArray.splice(index, 1);
		props.onDelete(updatedArray);
	};
	return (
		<div className='Show-Todo-List'>
			{props.inputArray.map((item, index) => (
				<li key={index} onClick={() => deleteHandler(index)}>
					{item}
				</li>
			))}
		</div>
	);
};

export default ShowList;
