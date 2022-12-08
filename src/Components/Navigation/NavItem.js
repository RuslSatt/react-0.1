import React from 'react';
import NavButton from "./NavButton";

const NavItem = ({text}) => {
	return (
		<li>
			<NavButton text={text}></NavButton>
		</li>
	);
};

export default NavItem;
