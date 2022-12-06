import React from 'react';

const ButtonQuery = ({name, id, handleClick, disabled}) => {
	return (
		<button disabled={disabled} id={id} onClick={handleClick}>
			{name}
		</button>
	);
};

export default ButtonQuery;
