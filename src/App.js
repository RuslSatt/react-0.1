import './normalize.css';
import './App.css';
import Box from "./Components/Box";
import {useState} from "react";
import Input from "./Components/Input";

function App() {
	const [value, setValue] = useState('');
	const [isDarkText, setIsDarkText] = useState(true);

	const handleSubmitColor = (e, item) => {
		e.preventDefault();
		setValue(item)
	}

	return (
		<div className="App">
			<Box value={value} isDarkText={isDarkText}></Box>
			<Input
				handleSubmitColor={handleSubmitColor}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}
			></Input>
		</div>
	);
}

export default App;
