import React, { useState } from "react";
import "./styles.css";

function AlerttBox(props) {
	const [proceedButton, setProceedButton] = useState(false);

	const proceedHandler = () => {
		setProceedButton(true);
		props.deleteButtonStateSended(false);
		props.onProceedClicked(setProceedButton);
	};

	return (
		<div id='alert'>
			<h2>Are you sure? </h2>
			<p>These changes can't be reverted!</p>
			<button onClick={proceedHandler}>Proceed</button>
		</div>
	);
}

export default AlerttBox;
