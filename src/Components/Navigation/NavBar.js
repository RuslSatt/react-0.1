import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<Ul>
			<li>
				<StyledLink to="/">Home</StyledLink>
			</li>
			<li>
				<StyledLink to="/post">Post</StyledLink>
			</li>
			<li>
				<StyledLink to="/about">About</StyledLink>
			</li>
		</Ul>
	);
};

export const StyledLink = styled(Link)`
  color: #000;
`

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 30px;
`

export default NavBar;
