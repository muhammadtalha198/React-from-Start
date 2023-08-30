import "./ExpenseItem.css";

function ExpenseItem(props) {
	
    /*
        let itemDate = new Date(2023, 8, 29); //builtin function Date();
        let itemName = "Car Insurance";
        let itemPrice = 345.87;

        Now we set all those upper static values with props from the main component.
	*/
    return (
		<div className='expense-item'>
			<div>{props.date.toISOString()}</div>
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
