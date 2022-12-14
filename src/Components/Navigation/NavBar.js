import React from 'react';
import NavItem from "./NavItem";
import styled from "styled-components";

const NavBar = () => {
	return (
		<Ul>
			<NavItem link={'/'} text={'Home'}></NavItem>
			<NavItem link={'/post'} text={'Post'}></NavItem>
			<NavItem link={'/about'} text={'About'}></NavItem>
		</Ul>
	);
};

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 30px;
`

export default NavBar;
