import "./ExpenseItem.css";

function ExpenseItem() {
	let itemDate = new Date(2023, 8, 29); //builtin function Date();
	let itemName = "Car Insurance";
	let itemPrice = 345.87;

	return (
		<div className='expense-item'>
			<div>{itemDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{itemName}</h2>
				<div className='expense-item__price'>{itemPrice}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
