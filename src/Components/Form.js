import React from 'react';
import Search from "./Search";

const Form = () => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Search></Search>
		</form>
	);
};

export default Form;
