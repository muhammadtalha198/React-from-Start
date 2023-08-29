import "./ExpenseItem.css";

/** 

function ExpenseItem() {
	return (
		<div className='expense-item'>
			<div>Tue-29-Agust-2023</div>
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>Car Insurrance</h2>
				<div className='expense-item__price'>256.34$</div>
			</div>
		</div>
	);
}

*/

/**
 *
 * @returns in react we donot put values directly into the jsx
 * so we could create some variable and pass them through them
 * so it would be updatable.
 *
 * we will be writing this like .
 */

function ExpenseItem() {
	let itemDate = new Date(2023, 8, 29);
	let itemName = "Car Insurance";
	let itemPrice = 345.87;

	return (
        <div className='expense-item'>
            {/* date is an object so we have to write it this way. */}
			<div>{itemDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{itemName}</h2>
				<div className='expense-item__price'>{itemPrice}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
