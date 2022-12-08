import './normalize.css';
import './App.css';
import Header from "./Components/Header";
import ToolBar from "./Components/ToolBar";
import {useState} from "react";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer";
import styled from "styled-components";

// npx json-server -p 3100 -w data/db.json

function App() {
	const [value, setValue] = useState('')
	return (
		<div className="App">
			<Header></Header>
			<ToolBar value={value} setValue={setValue}></ToolBar>
			<Main>
				<Content></Content>
			</Main>
			<Footer></Footer>
		</div>
	);
}

const Main = styled.main`
  flex-grow: 1;
`

export default App;
