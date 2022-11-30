import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import './normalize.css';

function App() {
	return (
		<div className="App">
			<Header className="Header"></Header>
			<Content></Content>
			<Header></Header>
		</div>
	);
}

export default App;
