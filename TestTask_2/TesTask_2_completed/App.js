import "./App.css";
import { useState } from "react";
import InputList from "./Components/InputList";
import ShowList from "./Components/ShowList";

function App() {
	const [inputArray, setInputArray] = useState([]);

	const handleDelete = (updatedArray) => {
		setInputArray(updatedArray);
	};

	return (
		<div className='App'>
			<InputList inputArray={inputArray} setInputArray={setInputArray} />
			<ShowList inputArray={inputArray} onDelete={handleDelete} />
		</div>
	);
}

export default App;
