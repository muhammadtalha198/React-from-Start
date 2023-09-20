import React from "react";

export default function Todo(props) {
	return (
		<div>
			{props.dummyList.map((item) => (
				<li>{item}</li>
			))}
		</div>
	);
}
