import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import {useState} from "react";
import Footer from "./Components/Footer";
import styled from "styled-components";
import Home from "./Components/Content/Home";
import Post from "./Components/Content/Post";
import About from "./Components/Content/About";
import {Route, Routes} from "react-router-dom";

// npx json-server -p 3100 -w data/db.json

function App() {
	const [search, setSearch] = useState('')
	return (
		<div className="App">
			<Header></Header>
			<Nav search={search} setSearch={setSearch}></Nav>

			<Main>
				<Routes>
					<Route path="/" element={<Home/>}/>
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
