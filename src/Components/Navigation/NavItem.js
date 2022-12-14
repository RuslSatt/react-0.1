import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavItem = ({text, link}) => {
	return (
		<li>
			<StyledLink to={link}>{text}</StyledLink>
		</li>
	);
};

const StyledLink = styled(Link)`
  color: #000;
`

export default NavItem;
