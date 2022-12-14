import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import {useEffect, useState} from "react";
import Footer from "./Components/Footer";
import styled from "styled-components";
import Home from "./Components/Content/Home";
import Post from "./Components/Content/Post";
import About from "./Components/Content/About";
import {Route, Routes} from "react-router-dom";
import {getItems} from "./API";

// npx json-server -p 3100 -w data/db.json

function App() {
	const [items, setItems] = useState([])
	const [search, setSearch] = useState('')
	const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

	useEffect(() => {
		const fetchData = async () => {
			const res = await getItems();
			if (res) setItems(res);
		}
		fetchData();
	}, [])

	return (
		<div className="App">
			<Header></Header>
			<Nav search={search} setSearch={setSearch}></Nav>

			<Main>
				<Routes>
					<Route path="/" element={<Home items={filteredItems}/>}/>
					<Route path="/post" element={<Post/>}/>
					<Route path="/about" element={<About/>}/>
				</Routes>
			</Main>

			<Footer></Footer>
		</div>
	);
}

const Main = styled.main`
  flex-grow: 1;
`

export default App;
