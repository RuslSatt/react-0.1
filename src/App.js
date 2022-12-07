import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import {useEffect, useState} from "react";
import Table from "./Components/Content/Table";

// npx json-server -p 3100 -w data/db.json

function App() {
	const URL = 'https://jsonplaceholder.typicode.com/';

	const [reqType, setReqType] = useState('users')
	const [items, setItems] = useState('')
	const [err, setErr] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);


	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setDisabled(true)

			try {
				const newUrl = `${URL + reqType}`
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
		fetchData();
	}, [reqType])


	return (
		<div className="App">
			<Header className="Header"
					disabled={disabled}
					setReqType={setReqType}
					reqType={reqType}>
			</Header>
			{err && <p>Error:{err}</p>}
			{isLoading && <p style={{color: 'red'}}>Loading...</p>}
			{!err && !isLoading &&
				<Table items={items}></Table>
			}
		</div>
	);
}

export default App;
