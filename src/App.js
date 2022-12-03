import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer";
import {useEffect, useState} from "react";
import AddItem from "./Components/Content/AddItem";
import SearchItem from "./Components/Content/SearchItem";

function App() {
	const local = JSON.parse(localStorage.getItem('shoppingList'))
	const [items, setItems] = useState(local || []);

	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('')


	useEffect(() => {
		localStorage.setItem('shoppingList', JSON.stringify(items))
	}, [items])

	const handleCheck = (id) => {
		const list = [...items];
		const item = list.find((item) => item.id === id);
		if (item) {
			item.checked = !item.checked;
			setItems(list)
		}
	}

	const handleDelete = (id) => {
		const list = items.filter((item) => item.id !== id);
		setItems(list)
	}

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = {id, checked: false, item};
		const list = [...items, myNewItem];
		setItems(list)
	}

	const handleSumbit = (e) => {
		e.preventDefault();
		if (!newItem) return
		addItem(newItem)
		setNewItem('');
	}

	const sortItems = items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className="App">
			<Header className="Header"></Header>
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSumbit={handleSumbit}
			></AddItem>
			<SearchItem
				search={search}
				setSearch={setSearch}
			></SearchItem>
			<Content items={sortItems}
					 handleCheck={handleCheck}
					 handleDelete={handleDelete}>
			</Content>
			<Footer count={items?.length}></Footer>
		</div>
	);
}

export default App;
