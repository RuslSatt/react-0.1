import React from 'react';
import NavBar from "./Navigation/NavBar";
import Form from "./Form";
import styled from "styled-components";

const ToolBar = ({value, setValue}) => {
	return (
		<Wrapper>
			<Form value={value} setValue={setValue}></Form>
			<NavBar></NavBar>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #a8a7a7;
  padding: 10px;
`

export default ToolBar;
