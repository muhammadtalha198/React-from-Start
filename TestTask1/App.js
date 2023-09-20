import React, { useState } from "react";
import "./styles.css";
import AlerttBox from "./AlerttBox";

export default function App(props) {
	const [deleteClicked, setDeleteClicked] = useState(false);

	const deleteHandler = () => {
		setDeleteClicked(true);
		console.log(deleteClicked);
	};

	const proceedClickHandler = (proceedButton) => {
		proceedButton(false);
	};

	const deleteButton = <button onClick={deleteHandler}>Delete</button>;
	const AlertBox = (
		<AlerttBox
			deleteButtonStateSended={setDeleteClicked}
			deleteButtonSended={deleteClicked}
			onProceedClicked={proceedClickHandler}
		/>
	);

	return (
		<div>
			{/* in this case if you click delete it will remove and alertbox show and when
			you click proceed in alert box alert box will remove and delete will show again */}

			{/* {deleteClicked === true ? AlertBox : deleteButton} */}

			{/* in second case if you click delete it will stay and alertbox show too and when
			you click proceed in alert box alert box will remove and delete will be already there */}
			{deleteButton}
			{deleteClicked === true && AlertBox}
		</div>
	);
}
