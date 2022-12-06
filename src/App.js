import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import {useEffect, useState} from "react";
import Content from "./Components/Content/Content";

// npx json-server -p 3100 -w data/db.json

function App() {
	const URL = 'https://jsonplaceholder.typicode.com/';

	const [items, setItems] = useState('')
	const [err, setErr] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);

	const fetchData = async (id = 'users') => {
		setIsLoading(true);
		setDisabled(true)

		try {
			const newUrl = `${URL + id}`
			const response = await fetch(newUrl)
			if (!response.ok) throw Error('Error');
			const res = await response.json();
			setErr(null);
			setItems(res)
		} catch (e) {
			setErr(e.message);
		} finally {
			setIsLoading(false)
			setDisabled(false)
		}
	}

	useEffect(() => {
		fetchData();
	}, [])


	return (
		<div className="App">
			<Header className="Header"
					disabled={disabled}
					fetchData={fetchData}>
			</Header>
			<main>
				{err && <p>Error:{err}</p>}
				{isLoading && <p style={{color: 'red'}}>Loading...</p>}
				{!err && !isLoading &&
					<Content items={items}></Content>
				}
			</main>
		</div>
	);
}

export default App;
