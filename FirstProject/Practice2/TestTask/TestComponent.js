function TestComponent(props) {
	return (
		<div>
			<div>
				<h2>{props.title}</h2>
				<p>{props.price}</p>
				<h3>{props.description}</h3>
			</div>
		</div>
	);
}

export default TestComponent;
