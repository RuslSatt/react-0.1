import React from 'react';

const Header = (props) => {
	return (
		<header>
			<p>{props.title}</p>
		</header>
	);
};

Header.defaultProps = {
	title: 'List',
}

export default Header;
