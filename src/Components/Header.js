import React from 'react';
import ButtonQuery from "./Content/ButtonQuery";

const Header = ({disabled, fetchData}) => {

	const handleClick = async (e) => {
		fetchData(e.target.id)
	}

	return (
		<header className="headerQuery">
			<ButtonQuery handleClick={handleClick} disabled={disabled} id={'users'} name={'Users'}></ButtonQuery>
			<ButtonQuery handleClick={handleClick} disabled={disabled} id={'posts'} name={'Posts'}></ButtonQuery>
			<ButtonQuery handleClick={handleClick} disabled={disabled} id={'comments'} name={'Comments'}></ButtonQuery>
		</header>
	);
};

Header.defaultProps = {
	title: 'List',
}

export default Header;
