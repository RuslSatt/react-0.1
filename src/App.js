import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import ToolBar from "./Components/ToolBar";

// npx json-server -p 3100 -w data/db.json

function App() {
	return (
		<div className="App">
			<Header className="header"></Header>
			<ToolBar></ToolBar>
		</div>
	);
}

export default App;
