import React from 'react';
import NavBar from "./Navigation/NavBar";
import Form from "./Form";
import styled from "styled-components";

const Nav = ({search, setSearch}) => {
	return (
		<Wrapper>
			<Form search={search} setSearch={setSearch}></Form>
			<NavBar></NavBar>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
  min-height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #a8a7a7;
  padding: 10px;
`

export default Nav;
