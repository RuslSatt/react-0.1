import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer";
import {useState} from "react";

function App() {
	const [items, setItems] = useState([
		{
			id: '1',
			name: 'Bob',
			checked: true,
		},
		{
			id: '2',
			name: 'Max',
			checked: false,
		},
	]);

	const handleCheck = (id) => {
		const list = [...items];
		const item = list.find((item) => item.id === id);
		if (item) {
			item.checked = !item.checked;
			setItems(list);
		}
		localStorage.setItem('list', JSON.stringify(list))
	}

	const handleDelete = (id) => {
		const list = items.filter((item) => item.id !== id);
		setItems(list);
		localStorage.setItem('list', JSON.stringify(list))
	}

	return (
		<div className="App">
			<Header className="Header"></Header>
			<Content items={items}
					 handleCheck={handleCheck}
					 handleDelete={handleDelete}>
			</Content>
			<Footer count={items.length}></Footer>
		</div>
	);
}

export default App;
