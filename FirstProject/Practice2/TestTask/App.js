
import TestComponent from "./components/TestComponent";

function App() {


	return (
			<h1>My Demo Shop </h1>

			<TestComponent
				title='Product 1'
				price='$10'
				description='Firsdt product'
			/>
			<TestComponent
				title={"Product 2"}
				price={"$20"}
				description={"Second product"}
			/>
		</div>
	);
}

export default App;
