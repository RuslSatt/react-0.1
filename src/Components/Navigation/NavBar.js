import React from 'react';
import NavItem from "./NavItem";
import styled from "styled-components";

const NavBar = () => {
	return (
		<Nav>
			<Ul>
				<NavItem text={'Home'}></NavItem>
				<NavItem text={'Post'}></NavItem>
				<NavItem text={'About'}></NavItem>
			</Ul>
		</Nav>
	);
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Ul = styled.ul`
  display: flex;
  gap: 30px;
`

export default NavBar;
